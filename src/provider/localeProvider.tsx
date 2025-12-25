import { createContext, useContext, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { i18n } from "../i18n";
import { Lang } from "../types";

const LocaleContext = createContext<{
    locale: Lang;
    changeLang: (lang: Lang) => void;
}>({
    locale: i18n.locale as Lang,
    changeLang: (lang: Lang) => { },
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Lang>(i18n.locale as Lang);

    const changeLang = (lang: Lang) => {
        i18n.locale = lang;
        setLocale(lang); // FORCE RERENDER
    };

    return (
        <LocaleContext.Provider value={{ locale, changeLang }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    return useContext(LocaleContext);
}

export function ChangeLocale(){
    const { changeLang ,locale} = useLocale();
    return (
        <TouchableOpacity onPress={()=> changeLang(locale === 'en' ? 'vi' : 'en')}>
            <Text>{locale}</Text>
        </TouchableOpacity>
    )
}