import { useStore } from '@renderer/hooks/use-store'
import { Button } from './ui/button'

export const TestStoreButton = () => {
  const store = useStore()
  return (
    <>
      <Button
        onClick={async () => {
          const state = await store.get('test')
          console.log('state:', state)
        }}
      >
        get store
      </Button>
      <Button
        onClick={async () => {
          await store.set('test', Math.random())
          console.log('set state')
        }}
      >
        set store
      </Button>
    </>
  )
}
