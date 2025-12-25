import { i18n } from "@/src/i18n";
import { IntroStepData } from "./IntroStep";

export const getIntroSteps = (): IntroStepData[] => {
    const slides = i18n.t('onboading.slides') as Array<{ title: string; description: string }>;
    const contentSlides = slides.map((slide, index) => ({
        title: slide.title,
        description: slide.description,
        image: require('@/assets/staticImage/intro/Step1.png'),
        showButtons: index === slides.length - 1,
    }));

    return [...contentSlides];
};

export const introSteps = getIntroSteps();

