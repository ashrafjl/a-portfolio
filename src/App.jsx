import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { ThemeContext } from './context/ThemeContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: <ThemeContext><Layout /></ThemeContext>,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App