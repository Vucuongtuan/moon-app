import { StyleSheet, Dimensions } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollCtn: {
    flex: 1,
  },
  scrollContentCtn: {
    flexGrow: 1,
  },
  imageCtn: {
    height: SCREEN_HEIGHT * 0.6,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  contentCtn: {
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
});
