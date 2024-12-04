import ClientComponent from './_component/ClientComponent'
import QueryClientProvider from './_tanstack-query/QueryClientProvider'
import TanstackQueryExample from './_tanstack-query/TanstackQueryExample'
export default function Home() {
  return (
    <QueryClientProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div style={{ height: '2000px' }}>
          <h3>test 공간</h3>
          <ClientComponent></ClientComponent>
          <TanstackQueryExample></TanstackQueryExample>
        </div>
      </main>
    </QueryClientProvider>
  )
}
