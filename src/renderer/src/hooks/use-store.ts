import { useTRPC } from '@renderer/utils/trpc/react'
import { useMutation } from '@tanstack/react-query'

export const useStore = () => {
  const trpc = useTRPC()
  const get = useMutation(trpc.store.get.mutationOptions())
  const set = useMutation(
    trpc.store.set.mutationOptions({
      onError(error) {
        console.error(error)
      }
    })
  )
  return {
    get: (key: string) => get.mutateAsync(key),
    set: (key: string, value: unknown) => set.mutateAsync({ key, value })
  }
}
