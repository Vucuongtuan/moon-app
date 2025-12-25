import { usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChangeLocale, useLocale } from "../provider/localeProvider";
import useAuth from "../stores/auth";

export default function PopUp() {
    const [modalVisible, setModalVisible] = useState(false);
    const pathName = usePathname()
    const router = useRouter()
    const {user} = useAuth()
    const { locale } = useLocale()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.openButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Mở PopUp</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                               <ChangeLocale/>
                        <Text style={styles.modalText}>Nội dung PopUp của bạn</Text>
                        <Text>PathName:{pathName}</Text>
                        <Text>Locale:{locale}</Text>
                        <Text>user:{user?.name}</Text>

                    </View>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    openButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        marginTop: 15,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});