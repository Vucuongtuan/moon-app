import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
      flex: 1,
  },
  header: {
      padding: 20,
  },
  emptyTxt: {
    marginTop: 8,
    textAlign: "center",
    opacity: 0.7,
  },
  listContent: {
      paddingHorizontal: 20,
      paddingBottom: 150, // Space for footer
  },
  itemContainer: {
      flexDirection: 'row',
      marginBottom: 16,
      padding: 12,
      borderRadius: 12,
      // Shadow for iOS
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      // Elevation for Android
      elevation: 2,
  },
  itemImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 12,
      backgroundColor: '#f0f0f0',
  },
  itemDetails: {
      flex: 1,
      justifyContent: 'space-between',
  },
  quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
  },
  quantityText: {
      marginHorizontal: 12,
      fontSize: 16,
      minWidth: 20,
      textAlign: 'center',
  },
  removeButton: {
      marginLeft: 'auto',
      paddingHorizontal: 8,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 20,
      paddingBottom: 30, // For safe area if needed
      borderTopWidth: 1,
      borderTopColor: 'rgba(0,0,0,0.05)',
  },
  totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
  },
  checkoutButton: {
      width: '100%',
  },
  checkoutButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  }
});
