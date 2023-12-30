import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Contracts from './pages/Contracts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contracts",
    element: <Contracts/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
