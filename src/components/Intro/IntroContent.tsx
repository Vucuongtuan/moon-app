import { i18n } from "@/src/i18n";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../ui/Text";
import SelectLang from "./SelectLang";
import { styles } from "./IntroContent.styles";

interface IntroContentProps {
    title: string;
    description: string;
    showAuthButtons?: boolean;
    currentIndex: number;
    totalSteps: number;
    onNext: () => void;
    onPrev: () => void;
    onSignUp?: () => void;
    onSignIn?: () => void;
    hasImage?: boolean;
}

export default function IntroContent({
    title,
    description,
    showAuthButtons = false,
    currentIndex,
    totalSteps,
    onNext,
    onPrev,
    onSignUp,
    onSignIn,
}: IntroContentProps) {
    const isFirstStep = currentIndex === 0;
    const isLastStep = currentIndex === totalSteps - 1;

    return (
        <>
            <View style={styles.textCtn}>
                <Text style={styles.titleTxt}>
                    {title}
                </Text>

                <Text style={styles.descTxt}>
                    {description}
                </Text>
            </View>
            
            {isFirstStep && (
                <SelectLang />
            )}

            <View style={styles.footerCtn}>
                {showAuthButtons && (
                    <View style={styles.btnRowCtn}>
                        <TouchableOpacity
                            style={styles.outlineBtn}
                            onPress={onSignUp}
                        >
                            <Text style={styles.outlineBtnTxt}>
                                {i18n.t('onboading.signUp')}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.primaryBtn}
                            onPress={onSignIn}
                        >
                            <Text style={styles.primaryBtnTxt}>
                                {i18n.t('onboading.signIn')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {!showAuthButtons && (
                    <View style={styles.btnRowCtn}>
                        {!isFirstStep && (
                            <TouchableOpacity
                                style={styles.outlineBtn}
                                onPress={onPrev}
                            >
                                <Text style={styles.outlineBtnTxt}>
                                    {i18n.t('onboading.prev')}
                                </Text>
                            </TouchableOpacity>
                        )}

                        {!isLastStep && (
                            <TouchableOpacity
                                style={styles.primaryBtn}
                                onPress={onNext}
                            >
                                <Text style={styles.primaryBtnTxt}>
                                    {i18n.t('onboading.next')}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>
        </>
    );
}