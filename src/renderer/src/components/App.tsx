import { QueryClientProvider } from '@tanstack/react-query'
import { createTRPCClient } from '@trpc/client'
import { PropsWithChildren, useState } from 'react'
import { ipcLink } from 'trpc-electron/renderer'
import type { AppRouter } from '../../../main/api'
import { getQueryClient } from '../utils/react-query'
import { TRPCProvider } from '../utils/trpc'

function App({ children }: PropsWithChildren) {
  const queryClient = getQueryClient()
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [ipcLink()]
    })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {children}
      </TRPCProvider>
    </QueryClientProvider>
  )
}

export default App
