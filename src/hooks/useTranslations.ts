import { i18n } from "../i18n";





export function useTranslations(mainKey?: string) {
    return {
        t: (key: string) => mainKey ? i18n.t(`${mainKey}.${key}`) : i18n.t(key),
        locale: i18n.locale,
    }
}