import { authProcedure, publicProcedure, router } from './base'
import log from 'electron-log/main'

export const user = router({
  login: publicProcedure.mutation(() => {
    console.log('login')
  }),
  logout: authProcedure.mutation(() => {}),
  testQuery: publicProcedure.query(() => {
    console.log('testQuery')
    return 'testQuery'
  }),
  testMutation: publicProcedure.mutation(() => {
    console.log('testmutation')
    log.info('test main log')
    return 'testmutation'
  })
})
