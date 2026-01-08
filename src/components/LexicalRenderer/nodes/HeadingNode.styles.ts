import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16, // mt-4
    marginBottom: 8, // mb-2
  },
  baseText: {
    fontWeight: "bold",
  },
  h1: {
    fontSize: 30, // text-3xl
    lineHeight: 36,
  },
  h2: {
    fontSize: 24, // text-2xl
    lineHeight: 32,
  },
  h3: {
    fontSize: 20, // text-xl
    lineHeight: 28,
  },
  h4: {
    fontSize: 18, // text-lg
    lineHeight: 28,
  },
  defaultSize: {
    fontSize: 20, // text-xl (fallback in original code)
    lineHeight: 28,
  },
});
