import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import './App.css'
import Home from './assets/components/Home';
import About from './assets/components/About';
import Dashboard from './assets/components/Dashboard';
import Navbar from './assets/components/Navbar';
import Params from './assets/components/Params';
import Course2 from './assets/components/Course2';
import Course1 from './assets/components/Course1';
import Notfound from './assets/components/Notfound';

function App() {
  
  const router  = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path:'/about',
        element:
        <div>
          <Navbar/>
          <About/>
        </div>
      },
      {
        path:'/dashboard',
        element:
        <div>
          <Navbar/>
          <Dashboard/>
        </div>,
        children:[
          {
            path:'course1',
            element:
           <Course1/>
          },
          {
            path:"course2",
            element:
          <Course2/>
  
          },

        ]
      },
      {
        path:"/student/:id",
        element:
        <div>
          <Navbar/>
          <Params/>
        </div>
      },
      {
        path:'/:id',
        element:
        <div>
        <Navbar/>
        <Params/>
      </div>
      },
      {
        path:"*",
        element:
        <div>
          <Navbar/>
          <Notfound/>
        </div>
      }
    ]
  )

  return (
   <>
   <h1>Routes demo</h1>
   <RouterProvider router={router}/>
   
   </>
  )
}

export default App
