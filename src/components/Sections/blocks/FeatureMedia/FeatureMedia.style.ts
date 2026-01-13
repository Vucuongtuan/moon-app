import { StyleSheet } from "react-native";



export const FeatureMediaStyle = StyleSheet.create({
    ctn:{
     flex:1,
     paddingHorizontal:20,
   
    },
    imgCtn:{
        borderRadius:10,
        overflow:'hidden',
        aspectRatio:7/10,
    },
    image:{
     flex:1,
     width:'100%',
     height:'100%'
    },
    textCtn: {
        position: 'absolute',
        inset: 0,
        justifyContent: 'flex-end',
        padding: 20,
    },
    title:{
        color:'white',
        fontFamily:'Newsreader',
        fontStyle:'italic'
    }
})