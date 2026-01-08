import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16, // py-4
    flex: 1,
    marginLeft: -24, // -ml-6 (6 * 4)
    marginRight: -24, // -mr-6
  },
  media: {
    width: '100%',
    height: "auto",
    minHeight: 300,
    maxHeight: 600,
    paddingHorizontal: 2
  },
  caption: {
    textAlign: "center",
  },
});
