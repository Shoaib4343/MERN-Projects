import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import { Home } from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Categories from './pages/Categories'
const App = ()=>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/about',
          element: <About />
        },
        {
          path:'/contact',
          element: <Contact />
        },
        {
          path:'/cart',
          element: <Cart />
        },
        {
          path:'/login',
          element: <Login />
        },
        {
          path:'/categories',
          element: <Categories />
        },
        
        
       
      ]
    }
  ])
  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;