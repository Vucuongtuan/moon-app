import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 6,
  },
  // Variants - Container
  defaultBtn: {
    backgroundColor: "#f8f5ee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  defaultBtnPressed: {
    backgroundColor: "rgba(248, 245, 238, 0.9)",
  },
  destructiveBtn: {
    backgroundColor: "#ef4444",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  destructiveBtnPressed: {
    backgroundColor: "rgba(239, 68, 68, 0.9)",
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  outlineBtnPressed: {
    backgroundColor: "#f3f4f6",
  },
  secondaryBtn: {
    backgroundColor: "#141414",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  secondaryBtnPressed: {
    backgroundColor: "rgba(20, 20, 20, 0.8)",
  },
  ghostBtn: {},
  ghostBtnPressed: {
    backgroundColor: "#f3f4f6",
  },
  linkBtn: {},
  
  // Sizes - Container
  defaultSize: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  smSize: {
    height: 36,
    gap: 6,
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  lgSize: {
    height: 44,
    borderRadius: 6,
    paddingHorizontal: 24,
  },
  iconSize: {
    height: 40,
    width: 40,
  },
  
  // Text Styles
  baseTxt: {
    fontSize: 14,
    fontWeight: "500",
  },
  defaultTxt: {
    color: "#141414",
  },
  destructiveTxt: {
    color: "#ffffff",
  },
  outlineTxt: {
    color: "#1f2937",
  },
  secondaryTxt: {
    color: "#ffffff",
  },
  ghostTxt: {
    color: "#1f2937",
  },
  linkTxt: {
    color: "#f8f5ee",
  },
  linkTxtPressed: {
    textDecorationLine: "underline",
  },
  
  disabled: {
    opacity: 0.5,
  },
});
