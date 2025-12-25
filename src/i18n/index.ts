




import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

export const i18n = new I18n({
    en: require("./en.json"),
    vi: require("./vi.json"),
});

i18n.enableFallback = true;
const tag = getLocales()[0].languageTag
i18n.locale = tag.split('-')[0] ?? "vi";
