import { ipcRenderer, contextBridge } from 'electron'
import type { TRPCResponseMessage } from '@trpc/server/rpc'
import type { Operation } from '@trpc/client'
const ELECTRON_TRPC_CHANNEL = 'trpc-electron'


export type ETRPCRequest =
  | { method: 'request'; operation: Operation }
  | { method: 'subscription.stop'; id: number }


export interface RendererGlobalElectronTRPC {
  sendMessage: (args: ETRPCRequest) => void
  onMessage: (callback: (args: TRPCResponseMessage) => void) => void
}


export const exposeElectronTRPC = () => {
  const electronTRPC: RendererGlobalElectronTRPC = {
    sendMessage: (operation) => ipcRenderer.send(ELECTRON_TRPC_CHANNEL, operation),
    onMessage: (callback) => ipcRenderer.on(ELECTRON_TRPC_CHANNEL, (_event, args) => callback(args))
  }
  contextBridge.exposeInMainWorld('electronTRPC', electronTRPC)
}


exposeElectronTRPC()
