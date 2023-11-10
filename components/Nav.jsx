import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" aria-label="Hem">
        Hem
      </Link>
      <Link to="/movies" aria-label="Filmer">
        Filmer
      </Link>
      <Link to="/arcive" aria-label="Arkiv">
        Arkiv
      </Link>
      <Link to="/lectures" aria-label="Föreläsningar">
        Föreläsningar
      </Link>
    </nav>
  );
}

export default Nav;
