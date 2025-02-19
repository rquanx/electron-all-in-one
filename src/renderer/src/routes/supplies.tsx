import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/supplies')({
  component: Supplies
})

function Supplies() {
  return (
    <div>
      <Link to="/">back to root</Link>
    </div>
  )
}
