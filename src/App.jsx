import { Outlet } from 'react-router-dom'
import './App.css'
import RouterProvider from './providers/RouterProvider'

function App() {
  return (
    <main className='container max-w-[2320px] mx-auto'>
      <div className="min-h-screen bg-cover bg-theme bg-no-repeat flex flex-col justify-between py-4 px-6">
        <RouterProvider>
          <Outlet />
        </RouterProvider>
      </div>
    </main>
  )
}

export default App
