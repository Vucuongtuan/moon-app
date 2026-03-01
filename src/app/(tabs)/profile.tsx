import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import useAuth from '@/src/stores/auth';
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './profile.styles';
import { ThemedIcon } from '@/src/components/themed-icon';

export default function ProfileScreen() {
    const insets = useSafeAreaInsets();
    const {status,user} = useAuth();
    const colorScheme = useColorScheme();

    return (
        <ThemedView style={styles.ctn}>
             <Stack.Screen
                options={{
                    title: "",
                    headerShown: true,
                    headerTransparent:true,
                    headerShadowVisible:false,
                    headerRight:() => (
                        <View style={styles.header}>
                            <Link href="/settings" asChild>
                                <Pressable>
                                    <View style={{padding:5}}>
                                        <ThemedIcon name="settings" />
                                    </View>
                                </Pressable>
                            </Link>
                        </View>
                    )
                }}
            />
           <ScrollView style={{paddingTop: insets.top}}>
            {status !== 'loggedIn' || !user ? (
                <View style={styles.authContainer}>
                    <View style={styles.authButtons}>
                        <Link href="/login" asChild>
                            <Pressable style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </Pressable>
                        </Link>
                        
                        <Link href="/register" asChild>
                            <Pressable style={styles.signupButton}>
                                <Text style={[
                                    styles.signupButtonText,
                                    { color: colorScheme === 'dark' ? '#FFFFFF' : '#007AFF' }
                                ]}>
                                    Sign Up
                                </Text>
                            </Pressable>
                        </Link>
                    </View>
                      <Text style={[
                        styles.authSubtitle,
                        { color: colorScheme === 'dark' ? '#999999' : '#666666' }
                    ]}>
                        Sign in to access your profile and orders
                    </Text>
                </View>
            ) : (
                <View style={styles.info}> 
                    <View style={styles.avatar}>
                        <ThemedText type='title' style={styles.avatarText}>
                            {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
                        </ThemedText>
                    </View>
                    
                    <View style={styles.userDetails}>
                        <ThemedText type='title' style={styles.userName}>
                            {user?.name || 'User Name'}
                        </ThemedText>
                        <Text style={[
                            styles.userEmail,
                            { color: colorScheme === 'dark' ? '#999999' : '#666666' }
                        ]}>
                            {user?.email || 'user@example.com'}
                        </Text>
                    </View>
                </View>
            )}
           
           {/* Menu Items */}
           <View style={[
               styles.content,
               { backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#FFFFFF' }
           ]}>
               {/* Edit Profile */}
               <Link href="/edit-profile" asChild>
                   <Pressable style={styles.menuItem}>
                       <View style={styles.menuItemLeft}>
                           <Ionicons 
                               name="person-outline" 
                               size={22} 
                               color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'} 
                           />
                           <ThemedText style={styles.menuText}>
                               Edit Profile
                           </ThemedText>
                       </View>
                       <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                   </Pressable>
               </Link>

               {/* Addresses - Disabled if not logged in */}
               {status === 'loggedIn' && user ? (
                   <Link href="/addresses" asChild>
                       <Pressable style={styles.menuItem}>
                           <View style={styles.menuItemLeft}>
                               <Ionicons 
                                   name="location-outline" 
                                   size={22} 
                                   color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'} 
                               />
                               <ThemedText style={styles.menuText}>
                                   Addresses
                               </ThemedText>
                           </View>
                           <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                       </Pressable>
                   </Link>
               ) : (
                   <View style={[styles.menuItem, styles.menuItemDisabled]}>
                       <View style={styles.menuItemLeft}>
                           <Ionicons 
                               name="location-outline" 
                               size={22} 
                               color="#999999" 
                           />
                           <Text style={[styles.menuText, { color: '#999999' }]}>
                               Addresses
                           </Text>
                       </View>
                       <Ionicons name="lock-closed-outline" size={18} color="#999999" />
                   </View>
               )}

               {/* Payment Methods - Disabled if not logged in */}
               {status === 'loggedIn' && user ? (
                   <Link href="/payment-methods" asChild>
                       <Pressable style={styles.menuItem}>
                           <View style={styles.menuItemLeft}>
                               <Ionicons 
                                   name="card-outline" 
                                   size={22} 
                                   color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'} 
                               />
                               <ThemedText style={styles.menuText}>
                                   Payment Methods
                               </ThemedText>
                           </View>
                           <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                       </Pressable>
                   </Link>
               ) : (
                   <View style={[styles.menuItem, styles.menuItemDisabled]}>
                       <View style={styles.menuItemLeft}>
                           <Ionicons 
                               name="card-outline" 
                               size={22} 
                               color="#999999" 
                           />
                           <Text style={[styles.menuText, { color: '#999999' }]}>
                               Payment Methods
                           </Text>
                       </View>
                       <Ionicons name="lock-closed-outline" size={18} color="#999999" />
                   </View>
               )}

               {/* Wishlist - Disabled if not logged in */}
               {status === 'loggedIn' && user ? (
                   <Link href="/wishlist" asChild>
                       <Pressable style={styles.menuItem}>
                           <View style={styles.menuItemLeft}>
                               <Ionicons 
                                   name="heart-outline" 
                                   size={22} 
                                   color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'} 
                               />
                               <ThemedText style={styles.menuText}>
                                   Wishlist
                               </ThemedText>
                           </View>
                           <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                       </Pressable>
                   </Link>
               ) : (
                   <View style={[styles.menuItem, styles.menuItemDisabled]}>
                       <View style={styles.menuItemLeft}>
                           <Ionicons 
                               name="heart-outline" 
                               size={22} 
                               color="#999999" 
                           />
                           <Text style={[styles.menuText, { color: '#999999' }]}>
                               Wishlist
                           </Text>
                       </View>
                       <Ionicons name="lock-closed-outline" size={18} color="#999999" />
                   </View>
               )}

               <View style={[
                   styles.divider,
                   { backgroundColor: colorScheme === 'dark' ? '#2C2C2E' : '#E5E5EA' }
               ]} />

               <Link href="/help" asChild>
                   <Pressable style={styles.menuItem}>
                       <View style={styles.menuItemLeft}>
                           <Ionicons 
                               name="help-circle-outline" 
                               size={22} 
                               color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'} 
                           />
                           <Text style={[
                               styles.menuText,
                               { color: colorScheme === 'dark' ? '#FFFFFF' : '#000000' }
                           ]}>
                               Help & Support
                           </Text>
                       </View>
                       <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                   </Pressable>
               </Link>

               <Link href="/settings" asChild>
                   <Pressable style={styles.menuItem}>
                       <View style={styles.menuItemLeft}>
                           <Ionicons 
                               name="settings-outline" 
                               size={22} 
                               color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'} 
                           />
                           <Text style={[
                               styles.menuText,
                               { color: colorScheme === 'dark' ? '#FFFFFF' : '#000000' }
                           ]}>
                               Settings
                           </Text>
                       </View>
                       <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                   </Pressable>
               </Link>

               {/* Logout (only show if logged in) */}
               {status === 'loggedIn' && user && (
                   <>
                       <View style={[
                           styles.divider,
                           { backgroundColor: colorScheme === 'dark' ? '#2C2C2E' : '#E5E5EA' }
                       ]} />
                       
                       <Pressable 
                           style={styles.menuItem}
                           onPress={() => {
                               // Add logout logic here
                               console.log('Logout pressed');
                           }}
                       >
                           <View style={styles.menuItemLeft}>
                               <Ionicons 
                               name="log-out-outline" 
                               size={22} 
                               color="#FF3B30" 
                           />
                           <Text style={[
                               styles.menuText,
                               { color: '#FF3B30' } // Red color for logout
                           ]}>
                               Logout
                           </Text>
                           </View>
                       </Pressable>
                   </>
               )}
           </View>
           </ScrollView>
        </ThemedView>
    );
}
