import { router } from './base'
import { storeRouter } from './store'
import { user } from './user'

export const appRouter = router({
  user,
  store: storeRouter
})
// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter
