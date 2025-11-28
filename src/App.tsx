import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './Routes'
import { Suspense } from 'react'
import Skeleton from './components/Skeleton'

function App() {

  return (
    <>
    <Suspense fallback={<Skeleton/>}>
     <RouterProvider router={Router} />
    </Suspense>
    </>
  )
}

export default App
