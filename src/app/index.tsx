import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
    const router = useRouter();
    const [path, setPath] = useState("");

    const screens = [
        { title: "Login", path: "/login" },
        { title: "Register", path: "/register" },
        { title: "Cart", path: "/cart" },
        { title: "Profile", path: "/profile" },
        { title: "Product Detail (Modal)", path: "/modals/product-detail" },
        { title: "Terms", path: "/terms" },
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "Tabs", path: "/(tabs)" },
    ];


    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="p-4" contentContainerClassName="pb-10">

                <Text className="text-xl font-semibold mb-3 text-gray-700">Static Screens</Text>
                <View className="gap-3 mb-8">
                    {screens.map((screen) => (
                        <Link key={screen.path} href={screen.path as any} asChild>
                            <TouchableOpacity className="p-4 bg-gray-50 rounded-lg border border-gray-200 active:bg-gray-100">
                                <Text className="text-lg text-blue-600 font-medium">{screen.title}</Text>
                                <Text className="text-xs text-gray-500 mt-1">{screen.path}</Text>
                            </TouchableOpacity>
                        </Link>
                    ))}
                </View>

                <Text className="text-xl font-semibold mb-3 text-gray-700">Dynamic Screens</Text>
                <View className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <Text className="mb-2 text-base font-medium text-gray-800">Navigate to /[slug]</Text>
                    <Text className="mb-3 text-sm text-gray-500">
                        Valid slugs: <Text className="font-bold">about, contact, privacy-policy, terms-of-service</Text>
                    </Text>
                    <TextInput
                        className="p-3 bg-white border border-gray-300 rounded-lg mb-3 text-base"
                        placeholder="Enter slug..."
                        value={path}
                        onChangeText={setPath}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        className="bg-blue-600 p-3 rounded-lg items-center active:bg-blue-700"
                        onPress={() => {
                            if (path) router.push(`/${path}`);
                        }}
                    >
                        <Text className="text-white font-bold text-base">Go to Page</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}