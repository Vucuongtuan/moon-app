import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Root Container
  ctn: {
    width: "100%",
    position: "relative",
  },
  
  // Label Text
  labelTxt: {
    marginBottom: 8, // mb-2
    fontSize: 14, // text-sm
    fontWeight: "500", // font-medium
    color: "#374151", // text-gray-700
  },
  
  // Input Field (Base)
  inputField: {
    width: "100%",
    borderRadius: 12, // rounded-xl
    paddingHorizontal: 16, // px-4
    paddingVertical: 14, // py-3.5
    fontSize: 16, // text-base
    fontWeight: "400", // font-normal
  },
  
  // Input Variants
  inputDefault: {
    borderWidth: 1,
    borderColor: "#d1d5db", // border-gray-300
    backgroundColor: "#ffffff", // bg-white
    color: "#141414", // text-[#141414]
  },
  inputError: {
    borderWidth: 1,
    borderColor: "#f87171", // border-red-400
    backgroundColor: "#ffffff", // bg-white
    color: "#141414",
  },
  inputNoStyle: {
    // No specific style overrides
  },
  
  // Password Toggle Button
  passwordToggleBtn: {
    position: "absolute",
    right: 16, // right-4
    top: "50%",
    marginTop: -12, // Center vertically (icon size 24 / 2)
    justifyContent: "center",
    alignItems: "center",
  },
  
  // Error Text
  errorTxt: {
    marginTop: 4, // mt-1
    fontSize: 14, // text-sm
    color: "#ef4444", // text-red-500
  },
});