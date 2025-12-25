import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

export default function TanStackProvider({ children }: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 1000 * 60, // 1 min,
        gcTime: 1000 * 60 * 60 * 24, // 24 hours (data will be garbage collected after 24 hours if not observed)
      },
    },
  }));

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      {children}
    </PersistQueryClientProvider>
  )
}