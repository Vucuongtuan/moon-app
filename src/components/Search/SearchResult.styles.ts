import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  thumbnail: {
    width: "33%",
    height: "auto",
    aspectRatio: 16 / 9,
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#e5e7eb", // gray-200
  },
  placeholderContainer: {
    width: "33%",
    height: "auto",
    aspectRatio: 16 / 9,
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#e5e7eb", // gray-200
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  list: {
    flexDirection: "column",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  gapContainer: {
    gap: 16,
  },
  errorText: {
    color: "#ef4444", // red-500
  },
  noResultText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#6b7280", // gray-500
  },
});
