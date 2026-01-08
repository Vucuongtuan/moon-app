import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    paddingHorizontal: 0,
    paddingBottom: 10,
  },
  innerCtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "between", // justify-between
    justifyContent: "space-between",
    height: 32,
  },
  leftCtn: {
    width: "50%",
  },
  logo: {
    width: 140,
    height: 64,
  },
  rightCtn: {
    width: "50%",
    alignItems: "flex-end",
    paddingRight: 24,
    justifyContent: "flex-end",
    gap: 48,
    flexDirection: "row",
  },
});
