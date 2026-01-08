import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    height: 128,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  leftCtn: {
    flex: 1,
  },
  rightCtn: {
    flex: 1,
    alignItems: "flex-end",
  },
});
