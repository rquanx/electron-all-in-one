import { Button } from '@renderer/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import log from 'electron-log/renderer'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div>
      <Link to={'/supplies'}>go to supplies</Link>

      <Button
        onClick={() => {
          log.info('test renderer log')
        }}
      >
        log
      </Button>
    </div>
  )
}
