import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Authprobider from './Authprovider/Authprovider.jsx';
import RoomsDetails from './pages/RoomsDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/room/:id',
        element:<RoomsDetails/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprobider>
    <RouterProvider router={router} />
    </Authprobider>
  </React.StrictMode>,
)
