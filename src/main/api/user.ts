import { authProcedure, publicProcedure, router } from './base'

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
    return 'testmutation'
  })
})
