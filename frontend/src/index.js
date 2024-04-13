import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from './pages/Home';
import Chat from './pages/Chat';
import { ChakraProvider } from "@chakra-ui/react";

const AppLayout = ()=>{
  return(
    <ChakraProvider>
    <Outlet />
    </ChakraProvider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'/chats',
        element:<Chat />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
