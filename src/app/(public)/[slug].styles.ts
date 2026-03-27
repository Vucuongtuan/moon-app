import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    flex: 1,
  },
  pageLoadingCtn: {
    padding: 16,
  },
  pageContentCtn: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 8,
  },
  pageErrorCtn: {
    padding: 16,
  },
  pageErrorTxt: {
    color: "#ef4444", // text-red-500
  },
});
