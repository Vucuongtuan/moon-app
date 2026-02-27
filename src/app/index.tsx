import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./index.styles";

export default function IndexScreen() {
    const router = useRouter();
    const [path, setPath] = useState("");

    const screens = [
        { title: "Login", path: "/(auth)/login" },
        { title: "Register", path: "/(auth)/register" },
        { title: "Tabs (Home)", path: "/(tabs)" },
        { title: "Product Detail (Modal)", path: "/(modals)/product-detail" },
        { title: "Settings", path: "/(user)/settings" },
        { title: "Edit Profile", path: "/(user)/edit-profile" },
        { title: "Terms", path: "/terms" },
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "Posts List", path: "/(tabs)/posts" },
    ];


    return (
        <SafeAreaView style={styles.ctn}>
            <ScrollView style={styles.scrollCtn} contentContainerStyle={styles.scrollContentCtn}>

                <Text style={styles.sectionTitleTxt}>Static Screens</Text>
                <View style={styles.linksCtn}>
                    {screens.map((screen) => (
                        <Link key={screen.path} href={screen.path as any} asChild>
                            <Pressable 
                                style={({ pressed }) => [
                                    styles.linkBtn,
                                    pressed && styles.linkBtnPressed
                                ]}
                            >
                                <Text style={styles.linkTitleTxt}>{screen.title}</Text>
                                <Text style={styles.linkPathTxt}>{screen.path}</Text>
                            </Pressable>
                        </Link>
                    ))}
                </View>

                <Text style={styles.sectionTitleTxt}>Dynamic Screens</Text>
                <View style={styles.dynamicCtn}>
                    <Text style={styles.dynamicLabelTxt}>Navigate to /[slug]</Text>
                    <Text style={styles.dynamicDescTxt}>
                        Valid slugs: <Text style={styles.boldTxt}>about, contact, privacy-policy, terms-of-service</Text>
                    </Text>
                    <TextInput
                        style={styles.slugInput}
                        placeholder="Enter slug..."
                        value={path}
                        onChangeText={setPath}
                        autoCapitalize="none"
                    />
                    <Pressable
                        style={({ pressed }) => [
                            styles.goBtn,
                            pressed && styles.goBtnPressed
                        ]}
                        onPress={() => {
                            if (path) router.push(`/${path}`);
                        }}
                    >
                        <Text style={styles.goBtnTxt}>Go to Page</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
