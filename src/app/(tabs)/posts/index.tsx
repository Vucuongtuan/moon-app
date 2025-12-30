import PostList from "@/src/components/Posts/PostList"
import { ThemedView } from "@/src/components/themed-view"




export default function PostsScreen() {
    return(
      <ThemedView style={{flex:1}}>
        <PostList />
      </ThemedView>
    )
}