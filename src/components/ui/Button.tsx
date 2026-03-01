import * as React from 'react';
import { Pressable, type ViewStyle, type TextStyle, type StyleProp } from 'react-native';
import { TextClassContext } from './Text';
import { styles } from './Button.styles';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

type ButtonProps = React.ComponentProps<typeof Pressable> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

function Button({ style, variant = 'default', size = 'default', ...props }: ButtonProps) {
    // Determine container styles
    const getContainerStyle = (pressed: boolean): StyleProp<ViewStyle> => {
        const variantStyle = (() => {
            switch (variant) {
                case 'destructive': return [styles.destructiveBtn, pressed && styles.destructiveBtnPressed];
                case 'outline': return [styles.outlineBtn, pressed && styles.outlineBtnPressed];
                case 'secondary': return [styles.secondaryBtn, pressed && styles.secondaryBtnPressed];
                case 'ghost': return [styles.ghostBtn, pressed && styles.ghostBtnPressed];
                case 'link': return styles.linkBtn;
                default: return [styles.defaultBtn, pressed && styles.defaultBtnPressed];
            }
        })();

        const sizeStyle = (() => {
            switch (size) {
                case 'sm': return styles.smSize;
                case 'lg': return styles.lgSize;
                case 'icon': return styles.iconSize;
                default: return styles.defaultSize;
            }
        })();

        return [
            styles.ctn,
            variantStyle,
            sizeStyle,
            props.disabled && styles.disabled,
            typeof style === 'function' ? style({ pressed }) : style
        ];
    };

    // Determine text styles to pass via context
    const getTextStyle = (pressed: boolean): StyleProp<TextStyle> => {
        const variantTxtStyle = (() => {
            switch (variant) {
                case 'destructive': return styles.destructiveTxt;
                case 'outline': return styles.outlineTxt;
                case 'secondary': return styles.secondaryTxt;
                case 'ghost': return styles.ghostTxt;
                case 'link': return [styles.linkTxt, pressed && styles.linkTxtPressed];
                default: return styles.defaultTxt;
            }
        })();

        return [styles.baseTxt, variantTxtStyle];
    };

    return (
        <Pressable
            role="button"
            {...props}
            accessibilityState={{ disabled: props.disabled, ...props.accessibilityState }}
            style={({ pressed }) => getContainerStyle(pressed)}
        >
            {({ pressed }) => (
                <TextClassContext.Provider value={getTextStyle(pressed)}>
                    {typeof props.children === 'function' 
                        ? props.children({ pressed }) 
                        : props.children}
                </TextClassContext.Provider>
            )}
        </Pressable>
    );
}

export { Button };
export type { ButtonProps };
