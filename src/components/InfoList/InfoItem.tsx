import { InfoItemType } from "@/src/types";
import { View } from "react-native";
import { Text } from "../ui/Text";




export default function InfoItem(props: InfoItemType) {
    const { icon, title, description } = props;
    return (
        <View className="flex-row items-center gap-8 py-2">
            <View className="w-1/5 p-4">
                {icon && icon()}
            </View>
            <View className="flex-1">
                <Text variant={'h2'} className="text-left text-2xl py-0">
                    {title}
                </Text>
                {description && (
                    <Text variant={'p'} className="text-left text-lg">
                        {description}
                    </Text>
                )}
            </View>
        </View>
    );
}