import { useThemeColor } from "@/src/hooks/use-theme-color";
import { useTranslations } from "@/src/hooks/useTranslations";
import { Stack, useRouter } from "expo-router";
import { useCallback } from "react";

export default function SearchLayout() {
    const  {t} = useTranslations("search");
    const theme = useThemeColor({},'background');
    const router = useRouter()
    const handleSearchChange = useCallback((text: string) => {
    router.setParams({ q: text ?? '' });
    }, [router]);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitleAlign:'center',
          title: `${t('title')}`,
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
