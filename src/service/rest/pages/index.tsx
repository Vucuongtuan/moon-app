import { api } from "@/src/lib/axios";
import { tryQuery } from "@/src/lib/tryCatch";
import { Lang } from "@/src/types";







/*
    Fetch page by slug
    - GET /pages?where=`slug`
    - props: { slug: string }
*/
export async function findPageBySlug(slug: string, locale: Lang = 'vi') {
    return tryQuery(async () => {
        const res = await api.get(`/pages?where[slug][equals]=${slug}&locale=${locale}`)
        const docs = res.data;
        if (docs.totalDocs === 0 || docs.docs.length === 0) throw new Error('Page not found');
        const data = docs.docs[0];
        data.sections = data.sections.find((s: any) => s.blockType === 'content');
        return data;
    })
}
