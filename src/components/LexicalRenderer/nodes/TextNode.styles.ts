import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  base: {
    fontSize: 16, // text-base
    lineHeight: 24, // leading-6
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  lineThrough: {
    textDecorationLine: "line-through",
  },
  underline: {
    textDecorationLine: "underline",
  },
  // If both underline and line-through are present, we need to handle that.
  // RN textDecorationLine supports space separated values like "underline line-through"
});
