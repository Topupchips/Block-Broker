import "./Header.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { HashLink as Link } from 'react-router-hash-link';
function Header(){
    return (
      <>
        <header className="App-header">
          <h3 className="header-nav-logo">Block Broker</h3>
          <div className="header-nav-items">
            <Link to="/">Home</Link>
            <Link to="/home#about">About</Link>
            <Link to="/contracts">Contracts</Link>
            {/* <Link to="/faqs">Faqs</Link> */}
            <Link to="/login">Login</Link>
          <ConnectButton/>
          </div>
        </header>
      </>
    );
  }

  export default Header;