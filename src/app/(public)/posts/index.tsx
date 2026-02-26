import PostList from "@/src/components/Posts/PostList"
import { ThemedView } from "@/src/components/themed-view"
import { Stack } from "expo-router"




export default function PostsScreen() {
    return(
      <ThemedView style={{flex:1}}>
             <Stack.Screen
                    options={{
                        title: 'Post Details',
                        headerTitle: 'Posts',
                    }}
                />
        <PostList />
      </ThemedView>
    )
}