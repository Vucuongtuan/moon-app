import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // index.tsx (InfoList)
  listCtn: {
    flexDirection: "column",
    gap: 16,
  },
  
  // InfoItem.tsx
  itemCtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    paddingVertical: 8,
  },
  iconCtn: {
    width: "20%",
    padding: 16,
  },
  contentCtn: {
    flex: 1,
  },
  titleTxt: {
    textAlign: "left",
    fontSize: 24,
    paddingVertical: 0,
  },
  descTxt: {
    textAlign: "left",
    fontSize: 18,
  },
});
