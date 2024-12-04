'use client'

import { QueryClient, QueryClientProvider as Provider, useQuery } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </Provider>
  )
}

export default QueryClientProvider
