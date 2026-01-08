import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Header Container
  headerCtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16, // px-4
    paddingVertical: 8, // py-2
    gap: 12, // gap-3
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb", // border-gray-200
  },
  headerCtnDark: {
    borderBottomColor: "#1f2937", // dark:border-gray-800
  },
  
  // Input Wrapper
  inputWrapperCtn: {
    flex: 1,
  },
  
  // Search Input (Styles passed to Input component)
  searchInput: {
    backgroundColor: "#f3f4f6", // bg-gray-100
    borderWidth: 0, // border-none
  },
  searchInputDark: {
    backgroundColor: "#1f2937", // dark:bg-gray-800
  },
});