import { useThemeColor } from '@/src/hooks/use-theme-color';
import { cn } from '@/src/utils/cn';
import AntDesign from '@expo/vector-icons/AntDesign';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { Platform, Pressable, TextInput, useColorScheme, View } from 'react-native';
import { Text } from './Text';

const inputVariants = cva(
    cn(
        'w-full rounded-xl  px-4 py-3.5 text-base font-normal',
        Platform.select({
            web: 'outline-none transition-all duration-200 focus:ring-2 focus:ring-offset-0',
        })
    ),
    {
        variants: {
            variant: {
                default: cn(
                    'border-gray-300 border bg-white text-[#141414] placeholder:text-gray-400',
                    Platform.select({
                        web: 'focus:border-[#3569ed] focus:ring-[#3569ed]/20',
                    })
                ),
                error: cn(
                    'border-red-400 border bg-white text-[#141414] placeholder:text-gray-400',
                    Platform.select({
                        web: 'focus:border-red-500 focus:ring-red-500/20',
                    })
                ),
                noStyle: cn(
                    'outline-none'
                ),
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

type InputProps = React.ComponentProps<typeof TextInput> &
    VariantProps<typeof inputVariants> & {
        label?: string;
        error?: string;
        containerClassName?: string;
        type?: 'text' | 'password';
    };

const Input = forwardRef<TextInput, InputProps>(
    ({ className, variant, label, error, containerClassName, type, ...props }, ref) => {
        const [showPass, setShowPass] = React.useState(false);
        const theme = useColorScheme();
        const isDark = theme === 'dark';
        const isPassword = type === 'password';
        const color = useThemeColor({ }, 'text');
        
        return (
            <View className={cn('w-full relative ', containerClassName)}>
                {label && (
                    <Text className="mb-2 text-sm font-medium text-gray-700">
                        {label}
                    </Text>
                )}
                <TextInput
                    ref={ref}
                    className={cn(
                        inputVariants({ variant: error ? 'error' : variant }),
                        className
                    )}
                    placeholderTextColor={color}
                    {...props}
                    secureTextEntry={!showPass && isPassword}
                />
                {isPassword && (
                    <Pressable
                        onPress={() => setShowPass((prev) => !prev)}
                        className="absolute right-4 top-1/2"
                    >
                        {showPass ? (
                            <AntDesign name="eye-invisible" size={24} color="black" />
                        ) : (
                            <AntDesign name="eye" size={24} color="black" />
                        )}
                    </Pressable>
                )}
                {error && (
                    <Text className="mt-1 text-sm text-red-500">{error}</Text>
                )}
            </View>
        );
    }
);

Input.displayName = 'Input';

export { Input, inputVariants };
export type { InputProps };

