## 2025-02-23 - [Input Component Accessibility]
**Learning:** The `Input` component's password toggle button was missing an `accessibilityLabel` and had a hardcoded icon color. This made it inaccessible to screen readers and potentially invisible in dark mode (if the hardcoded color clashed).
**Action:** When creating or modifying UI components, always ensure interactive elements have `accessibilityLabel` and use `useThemeColor` for colors to support both light and dark modes. Added `common` translations for "Show/Hide password" to be reused.

## 2025-02-28 - [Link Accessibility in React Native]
**Learning:** In Expo Router, when using `<Link asChild>` to wrap a `<Pressable>` component for navigation, the `<Pressable>` acts merely as a clickable area. Screen readers may misinterpret it as a generic button or just read the plain text without indicating it's actionable navigation.
**Action:** Always ensure that `<Pressable>` elements used strictly for navigation (links to other routes/screens) explicitly declare `accessibilityRole="link"` and provide a meaningful `accessibilityLabel`.

## 2025-03-01 - Ensure `accessibilityState` maps to `disabled` for Pressable buttons
**Learning:** React Native's `<Pressable>` component does not automatically map the standard `disabled={true}` prop to the screen reader's accessibility state. A disabled button might still be perceived as active by a screen reader if the `accessibilityState={{ disabled: true }}` property is missing, leading to confusion.
**Action:** When creating accessible interactive elements like custom Buttons relying on `<Pressable>`, explicitly map the component's `disabled` prop to `accessibilityState={{ disabled: props.disabled }}`.

## 2025-03-06 - [Touchable Accessibility Roles]
**Learning:** Native React elements like `TouchableOpacity` function as buttons but do not have an implicit `button` role like a web `<button>`. When used as interactive elements without `accessibilityRole="button"`, screen readers treat them as generic text/content.
**Action:** When creating or modifying UI components that act as buttons (e.g. Search close, Language selection) with `TouchableOpacity` or `Pressable`, always ensure to add `accessibilityRole="button"` and an appropriate `accessibilityLabel`.
