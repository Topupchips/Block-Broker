import { Link } from "react-router-dom"

function Header(){
    return (
      <>
        <header className="App-header">
          <h3 className="header-nav-logo">Your Contract</h3>
          <div className="header-nav-items">
            <Link to="/">Home</Link>
            <Link to="/home#about">About</Link>
            <Link to="/contracts">Contracts</Link>
            <Link to="/faqs">Faqs</Link>
            <Link to="/login">Login</Link>
            <Link to="/connect">Connect</Link>
          </div>
        </header>
      </>
    );
  }

  export default Header;