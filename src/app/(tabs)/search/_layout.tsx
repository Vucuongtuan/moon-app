import { useThemeColor } from "@/src/hooks/use-theme-color";
import { useTranslations } from "@/src/hooks/useTranslations";
import { useLocale } from "@/src/provider/localeProvider";
import { Stack, useRouter } from "expo-router";
import { useCallback } from "react";

export default function SearchLayout() {
    const  {t} = useTranslations("search");
    const theme = useThemeColor({},'background');
    const {locale} = useLocale()
    const router = useRouter()
    const handleSearchChange = useCallback((text: string) => {
    router.setParams({ q: text ?? '' });
    }, [router]);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: `${t('title')} - ${locale}`,
          headerSearchBarOptions: {
            placement: 'automatic',
            placeholder: t('title'),
            onChangeText: (e)=> handleSearchChange(e.nativeEvent.text),
          } ,
          headerStyle: {
            backgroundColor:theme ,
          },
        }}
      />
    </Stack>
  );
}
