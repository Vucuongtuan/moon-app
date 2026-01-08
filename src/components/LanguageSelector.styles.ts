import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 9999, // rounded-full
    borderWidth: 1,
  },
  buttonSelected: {
    // bg-accent handled inline
    // border-accent handled inline
  },
  buttonUnselected: {
    backgroundColor: "transparent",
    // border-secondary handled inline
  },
  text: {
      // Base text styles if any
  },
  textSelected: {
      color: "white"
  },
  textUnselected: {
      // color secondary handled inline
  }
});
