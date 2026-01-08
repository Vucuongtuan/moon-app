import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    gap: 12,
  },
  requirementsCtn: {
    backgroundColor: "rgba(239, 246, 255, 0.8)",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dbeafe",
  },
  requirementsTitleTxt: {
    fontSize: 12,
    color: "#374151",
    marginBottom: 8,
    fontWeight: "600",
  },
  requirementsListCtn: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 16,
    rowGap: 4,
  },
  requirementItemCtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  requirementDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#3b82f6",
  },
  requirementTxt: {
    fontSize: 10,
    color: "#4b5563",
  },
  registerBtnWrapper: {
    marginTop: 4,
  },
  registerBtn: {
    width: "100%",
    backgroundColor: "#141414",
    height: 48,
    borderRadius: 12,
  },
  registerBtnTxt: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
  dividerCtn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#d1d5db",
  },
  dividerTxt: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "500",
  },
  socialBtnsCtn: {
    gap: 8,
  },
  socialBtn: {
    width: "100%",
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#ffffff",
  },
  socialBtnTxt: {
    color: "#141414",
    fontWeight: "600",
  },
  footerCtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  footerTxt: {
    color: "#4b5563",
    fontSize: 16,
  },
  signInBtn: {
    paddingVertical: 4,
  },
  signInTxt: {
    color: "#3569ed",
    fontWeight: "bold",
    fontSize: 16,
  },
});
