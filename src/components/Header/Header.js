import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

const Header = () => {

  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const [active, setActive] = React.useState('/')

  React.useEffect(() => {
    setActive(path)
  }, [path]);


  return (
    <React.Fragment>
      <div className="header-border"></div>
      <div className="header">
        <Link className={active === '/om-mig' ? 'active-nav-item' : ''} to="/om-mig"> Om mig </Link>
        <Link className={active === '/' || active.match(/portfolio/) ? 'active-nav-item' : ''} to="/"> Portfolio </Link>
        <Link className={active === '/kontakt' ? 'active-nav-item' : ''} to="/kontakt"> Kontakt </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;