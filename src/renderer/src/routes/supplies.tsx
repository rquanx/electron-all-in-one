import { TestButton } from '@renderer/components/TestTRPC'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/supplies')({
  component: Supplies
})

function Supplies() {
  return (
    <div>
      <Link to="/">back to root</Link>
      <TestButton />
    </div>
  )
}
