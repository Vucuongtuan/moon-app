import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    gap: 12,
  },
  forgotPwdCtn: {
    itemsEnd: "flex-end", // React Native style: alignItems: "flex-end"
    alignItems: "flex-end",
    marginTop: -4,
  },
  forgotPwdBtn: {
    paddingVertical: 4,
  },
  forgotPwdTxt: {
    fontSize: 14,
    color: "#3569ed",
    fontWeight: "500",
  },
  loginBtnWrapper: {
    marginTop: 4,
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "#141414",
    height: 48,
    borderRadius: 12,
  },
  loginBtnTxt: {
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
    textAlign: "center",
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
  signUpBtn: {
    paddingVertical: 4,
  },
  signUpTxt: {
    color: "#3569ed",
    fontWeight: "bold",
    fontSize: 16,
  },
});
