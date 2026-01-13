import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    ctn:{
        flex:1,
        marginTop: 5
    },
    contentContainer: {
        paddingHorizontal: 20,
    },
    item:{
        width: 210,
    },
    imageContainer: {
        width: '100%',
        aspectRatio:  3/4, 
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        marginBottom: 8
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        color: '#008B8B', // Teal color like design
        marginTop: 4
    },
    flatList:{
        flexGrow: 0,
    }
})