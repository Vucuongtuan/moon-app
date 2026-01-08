import { InfoItemType } from "@/src/types";
import { View } from "react-native";
import { Text } from "../ui/Text";
import { styles } from "./InfoList.styles";

export default function InfoItem(props: InfoItemType) {
    const { icon, title, description } = props;
    return (
        <View style={styles.itemCtn}>
            <View style={styles.iconCtn}>
                {icon && icon()}
            </View>
            <View style={styles.contentCtn}>
                <Text variant={'h2'} style={styles.titleTxt}>
                    {title}
                </Text>
                {description && (
                    <Text variant={'p'} style={styles.descTxt}>
                        {description}
                    </Text>
                )}
            </View>
        </View>
    );
}