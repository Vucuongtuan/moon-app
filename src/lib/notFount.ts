import { useRouter } from "expo-router";




export function notFound() {
    const router = useRouter();
    router.replace('/+not-found');
}