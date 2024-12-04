'use client'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const TanstackQueryExample = () => {
  const [isVisible, setIsVisible] = useState(true)

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/TanStack/query')
      return await response.json()
    },
  })

  const Btn = () => {
    return (
      <button
        onClick={() => {
          setIsVisible(!isVisible)
        }}
      >
        switch
      </button>
    )
  }
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  if (isVisible) {
    return (
      <div>
        <h1>{data.full_name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? 'Updating...' : ''}</div>
        <Btn></Btn>
      </div>
    )
  }

  return <Btn></Btn>
}

export default TanstackQueryExample
