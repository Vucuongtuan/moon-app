import { useThemeColor } from '@/src/hooks/use-theme-color';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { forwardRef } from 'react';
import { Platform, Pressable, TextInput, useColorScheme, View, ViewStyle } from 'react-native';
import { Text } from './Text';
import { styles } from './Input.styles';

// Removed cva variants in favor of explicit style logic

type InputProps = React.ComponentProps<typeof TextInput> & {
    label?: string;
    error?: string;
    containerStyle?: ViewStyle;
    type?: 'text' | 'password';
    variant?: 'default' | 'error' | 'noStyle';
};

const Input = forwardRef<TextInput, InputProps>(
    ({ style, variant = 'default', label, error, containerStyle, type, ...props }, ref) => {
        const [showPass, setShowPass] = React.useState(false);
        const theme = useColorScheme();
        const isPassword = type === 'password';
        const color = useThemeColor({ }, 'text');
        
        // Determine input style based on variant and error state
        const inputStyle = [
            styles.inputField,
            variant === 'noStyle' ? styles.inputNoStyle : (error ? styles.inputError : styles.inputDefault),
            style
        ];

        return (
            <View style={[styles.ctn, containerStyle]}>
                {label && (
                    <Text style={styles.labelTxt}>
                        {label}
                    </Text>
                )}
                <TextInput
                    ref={ref}
                    style={inputStyle}
                    placeholderTextColor="#9ca3af" // text-gray-400
                    {...props}
                    secureTextEntry={!showPass && isPassword}
                />
                {isPassword && (
                    <Pressable
                        onPress={() => setShowPass((prev) => !prev)}
                        style={styles.passwordToggleBtn}
                    >
                        {showPass ? (
                            <AntDesign name="eye-invisible" size={24} color="black" />
                        ) : (
                            <AntDesign name="eye" size={24} color="black" />
                        )}
                    </Pressable>
                )}
                {error && (
                    <Text style={styles.errorTxt}>{error}</Text>
                )}
            </View>
        );
    }
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };

