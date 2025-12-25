import { InfoItemType } from "@/src/types";
import { cn } from "@/src/utils/cn";
import { View } from "react-native";
import InfoItem from "./InfoItem";



interface Props {
    lists: InfoItemType[]
    className?: string
    isAnimated?: boolean
    delay?: number
}


export default function InfoList(props: Props) {
    const { lists, className, isAnimated = false, delay = 400 } = props;
    return (
        <View className={cn(className || 'flex-col gap-4')}>
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