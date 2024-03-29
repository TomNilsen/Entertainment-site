import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/" aria-label="Hem">
        Hem
      </NavLink>
      <NavLink to="/filmer" aria-label="Filmer">
        Filmer
      </NavLink>
      <NavLink to="/arkiv" aria-label="Arkiv">
        Arkiv
      </NavLink>
      <NavLink to="/forelasningar" aria-label="Föreläsningar">
        Föreläsningar
      </NavLink>
    </nav>
  );
}

export default Nav;
