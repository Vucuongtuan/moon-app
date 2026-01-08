import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textCtn: {
    marginBottom: 24,
  },
  titleTxt: {
    fontSize: 48,
    fontWeight: "bold",
    lineHeight: 56,
    marginBottom: 12,
    color: "#000000",
  },
  descTxt: {
    fontSize: 18,
    color: "#6b7280",
    marginBottom: 16,
    lineHeight: 28,
  },
  footerCtn: {
    marginTop: "auto",
  },
  btnRowCtn: {
    flexDirection: "row",
    gap: 16,
  },
  outlineBtn: {
    flex: 1,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#141414",
    borderRadius: 9999,
    itemsCenter: "center", // typo fix below
    alignItems: "center",
    justifyContent: "center",
  },
  outlineBtnTxt: {
    color: "#141414",
    fontWeight: "600",
    fontSize: 16,
  },
  primaryBtn: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: "#ff8c42",
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnTxt: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
