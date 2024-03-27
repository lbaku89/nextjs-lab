import ClientComponent from './_component/ClientComponent'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ height: '2000px' }}>
        <h3>test 공간</h3>
        <ClientComponent></ClientComponent>
      </div>
    </main>
  )
}
