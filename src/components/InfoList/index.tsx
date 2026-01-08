import { InfoItemType } from "@/src/types";
import { View, StyleProp, ViewStyle } from "react-native";
import InfoItem from "./InfoItem";
import { styles } from "./InfoList.styles";

interface Props {
    lists: InfoItemType[]
    style?: StyleProp<ViewStyle>
    isAnimated?: boolean
    delay?: number
}

export default function InfoList(props: Props) {
    const { lists, style, isAnimated = false, delay = 400 } = props;
    return (
        <View style={[styles.listCtn, style]}>
            {
                lists.map((item, index) => (
                    <View key={index} >
                        <InfoItem  {...item} />
                    </View>
                ))
            }
        </View>
    );
}