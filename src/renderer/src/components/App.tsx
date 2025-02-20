import { trpc } from '@renderer/utils/trpc/vanilla'
import { QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { getQueryClient } from '../utils/react-query'
import { TRPCProvider } from '../utils/trpc/react'

function App({ children }: PropsWithChildren) {
  const queryClient = getQueryClient()
  const [trpcClient] = useState(() => trpc
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
