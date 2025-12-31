/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#f8f5ee',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    tabBarBackground: '#f1ede3',
    primary: '#f8f5ee',
    secondary: '#141414',
    secondaryForeground: '#1f1f1f',
    accent: '#3569ed',
    subSecondary: '#666',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tabBarBackground: '#151718',
    primary: '#151718',
    secondary: '#ECEDEE',
    secondaryForeground: '#e5e5e5',
    accent: '#3569ed',
    subSecondary: '#c0c8cf',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});



export const DefaultBlurImage =
  "iVBORw0KGgoAAAANSUhEUgAAACAAAAASBAMAAADI5sFhAAAAKlBMVEXWzNzZ0OD37eXW1OHRyNbU0d7b4OfW3OTW2eLf1eXr5uvi4+vy6ujIwctyquTEAAAA3klEQVQY0yXQoQ7CMBAG4GvCA3BZELPTuGbJcBO1JEuWvkIR+BY/sT4Boa9Q0AjqkKQS23fhrvzu/9rcNYWOs/88T0uP2IYAe4b8ebpFAwvkmlgBAA8QX68Y451gAjWKFowx55SSIdgoRXBZnbPGnC4EG74hKd4752WdEWgyYiMHv/QEgrZQBOJu7vU0Aa9VahzpKmqOPFyhlCMZEXfvLUEpBFuhZ+mdPRN8vwSo52G19CQG7jvprUkpRig8AVGultojZ1C8oqk953fuqLbYDKtJj3f9GhAhhBuf/3v3A8XYZf1jUclIAAAAAElFTkSuQmCC";