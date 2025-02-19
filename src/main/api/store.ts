import { store } from '@main/utils/store'
import { publicProcedure, router } from './base'
import { z } from 'zod'
export const storeRouter = router({
  get: publicProcedure.input(z.string()).mutation((opts) => {
    const { input } = opts
    return store.get(input)
  }),
  set: publicProcedure
    .input(
      z.object({
        key: z.string(),
        value: z.unknown()
      })
    )
    .mutation((opts) => {
      const { input } = opts
      return store.set(input.key, input.value)
    })
})
