import { useTRPC } from '@renderer/utils/trpc/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button } from './ui/button'

export const TestButton = () => {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.user.testQuery.queryOptions())
  const ping = useMutation(trpc.user.testMutation.mutationOptions())

  return (
    <Button
      onClick={() => {
        ping.mutate()
      }}
    >
      test {data}
    </Button>
  )
}
