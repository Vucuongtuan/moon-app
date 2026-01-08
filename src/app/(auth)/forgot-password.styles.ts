import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    flex: 1,
  },
  scrollCtn: {
    flex: 1,
    backgroundColor: "#f8f5ee",
  },
  scrollContentCtn: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  mainCtn: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 32,
  },
  backBtnWrapper: {
    marginBottom: 32,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    marginLeft: -8,
  },
  backBtnTxt: {
    color: "#3569ed",
    fontWeight: "600",
    fontSize: 16,
  },
  headerCtn: {
    marginBottom: 40,
  },
  titleTxt: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#141414",
    marginBottom: 12,
    lineHeight: 44,
  },
  subtitleTxt: {
    fontSize: 16,
    color: "#4b5563",
    lineHeight: 24,
  },
});
