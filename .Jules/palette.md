## 2025-02-23 - [Input Component Accessibility]
**Learning:** The `Input` component's password toggle button was missing an `accessibilityLabel` and had a hardcoded icon color. This made it inaccessible to screen readers and potentially invisible in dark mode (if the hardcoded color clashed).
**Action:** When creating or modifying UI components, always ensure interactive elements have `accessibilityLabel` and use `useThemeColor` for colors to support both light and dark modes. Added `common` translations for "Show/Hide password" to be reused.

## 2025-02-28 - [Link Accessibility in React Native]
**Learning:** In Expo Router, when using `<Link asChild>` to wrap a `<Pressable>` component for navigation, the `<Pressable>` acts merely as a clickable area. Screen readers may misinterpret it as a generic button or just read the plain text without indicating it's actionable navigation.
**Action:** Always ensure that `<Pressable>` elements used strictly for navigation (links to other routes/screens) explicitly declare `accessibilityRole="link"` and provide a meaningful `accessibilityLabel`.
