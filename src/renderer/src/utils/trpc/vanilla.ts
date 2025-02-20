import type { AppRouter } from '@main/api'
import { createTRPCClient } from '@trpc/client'
import { ipcLink } from 'trpc-electron/renderer'
export const trpc = createTRPCClient<AppRouter>({
  links: [ipcLink()]
})
