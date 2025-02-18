import { createTRPCContext } from '@trpc/tanstack-react-query'
import type { AppRouter } from '../../../main/api'
export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>()
