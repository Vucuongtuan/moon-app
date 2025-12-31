import HeaderSection from '@/src/components/Header/HeaderSection';
import { Sections } from '@/src/components/Sections/RenderSections';
import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { useLocale } from '@/src/provider/localeProvider';
import { findPageBySlug } from '@/src/service/graphQL/pages';
import { useQuery } from '@tanstack/react-query';
import * as Haptics from 'expo-haptics';
import { useRef } from 'react';
import { ActivityIndicator, NativeScrollEvent, NativeSyntheticEvent, RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const locale = useLocale();

    const insets = useSafeAreaInsets();
    const { data, isFetching, refetch, isError } = useQuery({
        queryKey: ['screen', 'home'],
        queryFn: async () => findPageBySlug('home')
    });
    const doc = data?.Screens?.docs?.[0];
    console.log({doc});
    const isHapticTriggered = useRef(false);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const PULL_THRESHOLD = 70;

        const isOverScrollTop = contentOffset.y < -PULL_THRESHOLD;

        const isOverScrollBottom = contentOffset.y + layoutMeasurement.height > contentSize.height + PULL_THRESHOLD;

        if ((isOverScrollTop || isOverScrollBottom) && !isHapticTriggered.current) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            isHapticTriggered.current = true;
        }

        if (!isOverScrollTop && !isOverScrollBottom && isHapticTriggered.current) {
            isHapticTriggered.current = false;
        }
    };

    const renderLoading = () => (
        <ThemedView style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
        </ThemedView>
    );

    const renderError = () => (
        <ThemedView  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <ThemedText >
                Không thể tải dữ liệu. Vui lòng thử lại.
            </ThemedText>
        </ThemedView>
    );
    return (
        <ThemedView style={{flex:1, paddingTop: insets.top}}>
            <HeaderSection />
            {(isFetching && !doc) ? renderLoading() : 
             (isError || (!isFetching && !doc)) ? renderError() : (
                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingTop: 10,
                        paddingBottom: insets.bottom + 20
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={isFetching}
                            onRefresh={refetch}
                        />
                    }
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >
                    <Sections blocks={doc?.sections || []} />
                </ScrollView>
            )}
        </ThemedView>
    );
}
