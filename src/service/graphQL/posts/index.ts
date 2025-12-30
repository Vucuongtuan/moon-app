import { gqlFetch } from "@/src/lib/graphQL";
import { Lang } from "@/src/types";




export const findPostBySlug = async (slug: string,locale:Lang) => {
    
    const [result,err] = await gqlFetch(`
        query Posts($slug: String) {
    Posts( where: { slug: { equals: $slug } }) {
        docs {
            id
            title
            description
            slug
            slugLock
            content
            updatedAt
            createdAt
            image {
                id
                alt
                caption
                blurData
                prefix
                updatedAt
                createdAt
                url
                thumbnailURL
                filename
                mimeType
                filesize
                width
                height
                focalX
                focalY
                sizes {
                    large {
                        url
                        width
                        height
                        mimeType
                        filesize
                        filename
                    }
                    medium {
                        url
                        width
                        height
                        mimeType
                        filesize
                        filename
                    }
                }
            }
        }
    }
}
        `,
        {
                locale:locale,
                slug:slug
        }
    )
    if(err || !result) throw err
    return result.data.Posts.docs[0]
}


export const findPosts = async ({ limit = 10, page = 1, locale }: {
    limit?: number, page?: number, locale: Lang
}) => {
    const [result, err] = await gqlFetch(
        `query Posts($page: Int, $limit: Int) {
            Posts(
                sort: "-createdAt"
                page: $page
                limit: $limit
                locale: ${locale}
            ) {
                docs {
                    id
                    title
                    description
                    slug
                    updatedAt
                    createdAt
                    image {
                        id
                        alt
                        blurData
                        url
                        width
                        height
                    }
                }
                hasNextPage
                nextPage
                totalPages
                totalDocs
            }
        }`,
        {
            page: page,
            limit: limit,
        }
    )
    if (err || !result) throw err;

    return result?.data.Posts
}