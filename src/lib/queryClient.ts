import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    createAsyncStoragePersister
} from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import {
    persistQueryClient,
} from "@tanstack/react-query-persist-client";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 1000 * 60,
            refetchOnWindowFocus: false,
        },
    },
});

const persister = createAsyncStoragePersister({
    storage: AsyncStorage,
});

persistQueryClient({
    queryClient,
    persister,
    maxAge: 1000 * 60 * 60 * 24,
});
