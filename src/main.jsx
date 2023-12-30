
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Contracts from './pages/Contracts.jsx';
import LoginForm from './pages/loginform.jsx';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

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
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
   
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig config={wagmiConfig}>
  <RainbowKitProvider chains={chains}>
  <React.StrictMode>  
    <RouterProvider router={router}/>
  </React.StrictMode>,
  </RainbowKitProvider>
    </WagmiConfig>
)
