import { gqlFetch } from '@/src/lib/graphQL';

import slugify from 'slugify';

export const findSearchByKeyword = async (keyword: string, locale: string) => {
  const normalizedKeyword = slugify(keyword, {
    replacement: ' ',
    lower: true,
    locale: locale,
  });
  const [result, err] = await gqlFetch(
    `
        query Searches {
    Searches(where: { OR: [
    { _title: { like: "${normalizedKeyword}" } },
    { title: { like: "${keyword}" } }
    ]}, locale: ${locale}) {
        limit
        totalDocs
        totalPages
        docs {
            id
            title
            priority
            _title
            url
            thumbnail
            updatedAt
            createdAt
        }
    }
}

        `,
    {
      variables: {
        keyword: normalizedKeyword,
        locale: locale,
      },
    }
  );

  if (err) return null;
  return result?.data?.Searches;
};
