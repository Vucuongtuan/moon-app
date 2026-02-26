## 2025-02-23 - [Input Component Accessibility]
**Learning:** The `Input` component's password toggle button was missing an `accessibilityLabel` and had a hardcoded icon color. This made it inaccessible to screen readers and potentially invisible in dark mode (if the hardcoded color clashed).
**Action:** When creating or modifying UI components, always ensure interactive elements have `accessibilityLabel` and use `useThemeColor` for colors to support both light and dark modes. Added `common` translations for "Show/Hide password" to be reused.
