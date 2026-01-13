import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-end",
    gap:10,
    paddingVertical:2,
  },
  ctn: {
    flex: 1,
    paddingHorizontal: 20,
  },
  info:{
    flexDirection:'row',
    alignItems:'center',
    gap:16,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 4,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#007AFF', // iOS blue, có thể thay bằng màu brand
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  userDetails: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  userName: {
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 14,
    color: '#666666',
  },
  authContainer: {
    paddingVertical: 80,
    paddingHorizontal: 4,
    alignItems: 'flex-start',
    gap: 16,
  },
  authTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  authSubtitle: {
    fontSize: 15,
    marginBottom: 8,
    textAlign:'left'
  },
  authButtons: {
    width: '100%',
    gap: 12,
    marginTop: 8,
    flexDirection:'row',
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButton: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  content:{
    marginTop: 20,
    borderRadius: 16,
    padding: 8,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  menuItemDisabled: {
    opacity: 0.6,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    marginHorizontal: 16,
  },
  item:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  },

});

