import { StyleSheet } from "react-native";




export const style = StyleSheet.create({
    ctn:{
        flex:1,
    },
    title:{
        fontWeight:'600',
        paddingHorizontal: 20, 
    },
    description:{
        fontSize:12,
        color:'#666',
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    seeMore:{
        fontSize:12,
        fontWeight:'600',
        color:'gray',
        paddingRight:20
    }
})