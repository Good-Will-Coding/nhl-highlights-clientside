import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="flexbox-container">
        <Link to="/" className="logo">
          <span><img src="https://i.ibb.co/0qNzZxm/nhllogo2.png" alt=""/></span>
          <span className="logo_highlights">HIGHLIGHTS</span>
        
        </Link>
        <nav className="flexbox-container--navlink__color">
          <Link to="/teams"><span>Teams</span></Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
