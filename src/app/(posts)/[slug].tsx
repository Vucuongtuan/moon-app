import { LexicalRenderer } from "@/src/components/LexicalRenderer";
import PostHeader from "@/src/components/Posts/PostHeader";
import { ThemedView } from "@/src/components/themed-view";
import { Media } from "@/src/payload-types";
import { useLocale } from "@/src/provider/localeProvider";
import { findPostBySlug } from "@/src/service/graphQL/posts";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";



export default function PostScreen() {
     const { slug } = useLocalSearchParams()
     const {locale} = useLocale();


     const {data,isFetching,isError}= useQuery({
        queryKey: ['post', slug],
        queryFn: async () => await findPostBySlug(slug as string,locale),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        gcTime: 1000 * 60 * 60 * 24,    // 24 hours
     })


  
    const media = data?.image as Media
    return (
        <ThemedView className="flex-1">
            <ScrollView>

           <PostHeader image={media}/> 
           <LexicalRenderer json={data?.content}/>
            </ScrollView>
        </ThemedView>
    );
}