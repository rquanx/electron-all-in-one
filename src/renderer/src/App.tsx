import electronLogo from './assets/electron.svg'
import { ipcLink } from 'trpc-electron/renderer'
import { QueryClientProvider } from '@tanstack/react-query'
import { createTRPCClient } from '@trpc/client'
import { TRPCProvider } from './utils/trpc'
import { useState } from 'react'
import type { AppRouter } from '../../main/api'
import { TestButton } from '@renderer/components/TestTRPC'
import { getQueryClient } from './utils/react-query'

function App() {
  const queryClient = getQueryClient()
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [ipcLink()]
    })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <div className="bg-red-600">123123123</div>
        <img alt="logo" className="logo" src={electronLogo} />
        <div className="creator">Powered by electron-vite</div>
        <div className="text">
          Build an Electron app with <span className="react">React</span>
          &nbsp;and <span className="ts">TypeScript</span>
        </div>
        <p className="tip">
          Please try pressing <code>F12</code> to open the devTool
        </p>
        <div className="actions">
          <div className="action">
            <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
              Documentation
            </a>
          </div>
          <div className="action">
            <TestButton />
          </div>
        </div>
      </TRPCProvider>
    </QueryClientProvider>
  )
}

export default App
