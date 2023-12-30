import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

/* Page imports */
import Home from './pages/Home.jsx';
import Contracts from './pages/Contracts.jsx';
import LoginForm from './pages/loginform.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contracts",
    element: <Contracts/>,
  },
  {
    path: "/login",
    element: <LoginForm/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
