import * as Slot from '@rn-primitives/slot';
import * as React from 'react';
import { Platform, Text as RNText, type Role, type TextStyle, type StyleProp } from 'react-native';
import { styles } from './Text.styles';

type TextVariant = 
    | 'default' 
    | 'h1' 
    | 'h2' 
    | 'h3' 
    | 'h4' 
    | 'p' 
    | 'blockquote' 
    | 'code' 
    | 'lead' 
    | 'large' 
    | 'small' 
    | 'muted';

const ROLE: Partial<Record<TextVariant, Role>> = {
    h1: 'heading',
    h2: 'heading',
    h3: 'heading',
    h4: 'heading',
    blockquote: Platform.select({ web: 'blockquote' as Role }),
    code: Platform.select({ web: 'code' as Role }),
};

const ARIA_LEVEL: Partial<Record<TextVariant, string>> = {
    h1: '1',
    h2: '2',
    h3: '3',
    h4: '4',
};

// Updated context to accept StyleProp<TextStyle> instead of string class
const TextClassContext = React.createContext<StyleProp<TextStyle>>(undefined);

type TextProps = React.ComponentProps<typeof RNText> & {
    asChild?: boolean;
    variant?: TextVariant;
    isAnimated?: boolean; // Kept for prop compatibility, though not used in static styles logic yet
    delay?: number;
};

function Text({
    style,
    asChild = false,
    variant = 'default',
    isAnimated = false,
    delay = 0,
    ...props
}: TextProps) {
    const textContextStyle = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    
    // Select style from styles object based on variant
    const variantStyle = React.useMemo(() => {
        switch (variant) {
            case 'h1': return styles.h1Txt;
            case 'h2': return styles.h2Txt;
            case 'h3': return styles.h3Txt;
            case 'h4': return styles.h4Txt;
            case 'p': return styles.pTxt;
            case 'blockquote': return styles.blockquoteTxt;
            case 'code': return styles.codeTxt;
            case 'lead': return styles.leadTxt;
            case 'large': return styles.largeTxt;
            case 'small': return styles.smallTxt;
            case 'muted': return styles.mutedTxt;
            default: return styles.defaultTxt;
        }
    }, [variant]);

    return (
        <Component
            style={[
                styles.baseTxt,
                variantStyle,
                textContextStyle,
                style
            ]}
            role={ROLE[variant]}
            aria-level={ARIA_LEVEL[variant]}
            {...props}
        />
    );
}

export { Text, TextClassContext };
export type { TextProps };

