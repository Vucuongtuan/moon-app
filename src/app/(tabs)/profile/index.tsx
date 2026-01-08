import { ThemedView } from '@/src/components/themed-view';
import { Link } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './index.styles';

export default function ProfileScreen() {
    const insets = useSafeAreaInsets();
    return (
        <ThemedView style={[styles.ctn, { paddingTop: insets.top }]}>
           {/* <HeaderSection /> */}
           <ScrollView>
           {/* <BlockHeader title="Settings" desc={"Settings"}/> */}
           <View style={styles.content}>
              <Link href="/settings" asChild>
              <Pressable>
                <ThemedView style={styles.item}>
                    <Text>Settings</Text>
                </ThemedView>
              </Pressable>
              </Link>
           </View>
           </ScrollView>
        </ThemedView>
    );
}
