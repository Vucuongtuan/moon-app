import { useLocale } from '@/src/provider/localeProvider';
import { findSearchByKeyword } from '@/src/service/graphQL/search';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';

interface UseSearchQueryOptions {
  enabled?: boolean;
  debounceTime?: number;
}

export function useSearchQuery(
  keyword: string,
  options: UseSearchQueryOptions = {}
) {
  const { locale } = useLocale();
  const debouncedQuery = useDebounce(keyword, options.debounceTime ?? 500);

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ['fast-search', debouncedQuery, locale],
    queryFn: () => findSearchByKeyword(debouncedQuery, locale),
    enabled: !!debouncedQuery && (options.enabled ?? true),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return {
    data: data?.docs || [],
    meta: {
      totalDocs: data?.totalDocs,
      limit: data?.limit,
      totalPages: data?.totalPages,
    },
    isLoading: isLoading || isFetching,
    isError,
    debouncedQuery,
    refetch,
  };
}
