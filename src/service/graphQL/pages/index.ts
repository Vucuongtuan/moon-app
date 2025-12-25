import { gqlFetch } from "@/src/lib/graphQL"








export const findPageBySlug = async (slug: string) => {
   const [result,err] =  await gqlFetch(
    `
    query QueryScreens{
    Screens(where: { _status: { equals: published }, slug: { equals: "home" } }) {
        docs {
            id
            title
            slug
            updatedAt
            createdAt
            _status
            sections {
                ... on MobileNotificationProps {
                    title
                    title_en
                    description
                    description_en
                    id
                    blockName
                    blockType
                    media {
                        alt
                        blurData
                        url
                        mimeType
                        width
                        height
                        focalX
                        focalY
                        prefix
                        sizes {
                            large {
                                url
                            }
                            medium {
                                url
                            }
                        }
                    }
                }
                ... on MobileProductArchivesProps {
                    title
                    title_en
                    description
                    description_en
                    type
                    id
                    blockName
                    blockType
                    category {
                        title
                        slug
                        id
                    }
                    product {
                        title
                        subTitle
                        gallery {
                            id
                            image {
                                id
                                alt
                                blurData
                                url
                                mimeType
                                width
                                height
                                focalX
                                focalY
                                prefix
                                sizes {
                                    medium {
                                        url
                                    }
                                    large {
                                        url
                                    }
                                }
                            }
                        }
                        enableVariants
                        variants {
                            docs {
                                title
                                id
                                inventory
                                priceInUSDEnabled
                                priceInUSD
                                priceInVNDEnabled
                                priceInVND
                                updatedAt
                                _status
                            }
                        }
                        priceInUSDEnabled
                        priceInUSD
                        priceInVNDEnabled
                        priceInVND
                        updatedAt
                        slug
                    }
                }
                ... on MobileContentProps {
                    title
                    title_en
                    description
                    description_en
                    content
                    content_en
                    id
                    blockName
                    blockType
                }
            }
        }
        limit
    }
}

    `,
    {
        variables: {
            slug:slug
        }
    }
)
if(err || !result) throw err
return result

}