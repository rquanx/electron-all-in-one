import { useTRPC } from '@renderer/utils/trpc'
import { useMutation, useQuery } from '@tanstack/react-query'

export const TestButton = () => {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.user.testQuery.queryOptions())
  const ping = useMutation(trpc.user.testMutation.mutationOptions())

  return (
    <button
      onClick={() => {
        ping.mutate()
      }}
    >
      test {data}
    </button>
  )
}
