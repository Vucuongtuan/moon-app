import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    gap: 20,
  },
  infoCtn: {
    backgroundColor: "rgba(239, 246, 255, 0.8)",
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#dbeafe",
  },
  infoContentCtn: {
    flexDirection: "row",
    itemsStart: "flex-start", // alignItem error fixed below
    alignItems: "flex-start",
    gap: 12,
  },
  infoIconCtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  infoIconTxt: {
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: 12,
  },
  infoTxt: {
    flex: 1,
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
  submitBtnWrapper: {
    marginTop: 8,
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "#141414",
    height: 56,
    borderRadius: 16,
  },
  submitBtnTxt: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
