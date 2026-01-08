import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal:8,
    gap:8,
  },
  contentCtn: {
    flex: 2,
  },
  titleTxt: {
    // Uses ThemedText type="h3"
  },
  descTxt: {
    marginTop: 4,
    lineHeight: 18,
  },
  imageCtn: {
    flex: 1,
    padding:2
  },
  image: {
    aspectRatio: 1 / 1,
    borderRadius: 4,
  },
});
