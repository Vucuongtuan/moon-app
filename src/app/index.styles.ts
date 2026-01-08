import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Root Container
  ctn: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  
  // ScrollView
  scrollCtn: {
    padding: 16,
  },
  scrollContentCtn: {
    paddingBottom: 40,
  },

  // Section Headers
  sectionTitleTxt: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#374151", // text-gray-700
  },

  // Static Screens Section
  linksCtn: {
    gap: 12, // gap-3
    marginBottom: 32, // mb-8
  },
  linkBtn: {
    padding: 16,
    backgroundColor: "#f9fafb", // bg-gray-50
    borderRadius: 8, // rounded-lg
    borderWidth: 1,
    borderColor: "#e5e7eb", // border-gray-200
  },
  linkBtnPressed: {
    backgroundColor: "#f3f4f6", // active:bg-gray-100
  },
  linkTitleTxt: {
    fontSize: 18,
    color: "#2563eb", // text-blue-600
    fontWeight: "500",
  },
  linkPathTxt: {
    fontSize: 12,
    color: "#6b7280", // text-gray-500
    marginTop: 4,
  },

  // Dynamic Screens Section
  dynamicCtn: {
    padding: 16,
    backgroundColor: "#f9fafb", // bg-gray-50
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb", // border-gray-200
  },
  dynamicLabelTxt: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "500",
    color: "#1f2937", // text-gray-800
  },
  dynamicDescTxt: {
    marginBottom: 12,
    fontSize: 14,
    color: "#6b7280", // text-gray-500
  },
  boldTxt: {
    fontWeight: "bold",
  },
  slugInput: {
    padding: 12,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db", // border-gray-300
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  goBtn: {
    backgroundColor: "#2563eb", // bg-blue-600
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  goBtnPressed: {
    backgroundColor: "#1d4ed8", // active:bg-blue-700
  },
  goBtnTxt: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});