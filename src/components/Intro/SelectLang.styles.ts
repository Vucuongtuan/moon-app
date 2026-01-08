import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    gap: 16,
  },
  row: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12, // py-3
    borderRadius: 32, // rounded-4xl (approx)
  },
  buttonSelected: {
    backgroundColor: "#ff8c42",
  },
  text: {
    fontSize: 20, // text-xl
    fontWeight: "600", // font-semibold
  },
  textSelected: {
    color: "white",
  },
});
