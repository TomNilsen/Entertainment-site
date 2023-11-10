import React from "react";
import { useState } from "react";
import { List, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function PopUpMain() {
  const [menu, setMenu] = useState("");

  function showMenu() {
    setMenu("showMenu");
  }

  function closeMenu() {
    setMenu("");
  }

  return (
    <>
      <button id="mobileMainBTN" onClick={showMenu} aria-label="Öppna meny">
        <List />
      </button>
      <nav id="mobileMain" className={menu}>
        <button onClick={closeMenu} aria-label="Stäng meny">
          <X />
        </button>
        <Link to="/" onClick={closeMenu} aria-label="Hem">
          Hem
        </Link>
        <Link to="/movies" onClick={closeMenu} aria-label="Filmer">
          Filmer
        </Link>
        <Link to="/arcive" onClick={closeMenu} aria-label="Arkiv">
          Arkiv
        </Link>
        <Link to="/lectures" onClick={closeMenu} aria-label="Föreläsningar">
          Föreläsningar
        </Link>
      </nav>
    </>
  );
}

export default PopUpMain;
