import React from "react";
import { useState } from "react";
import { List, X } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/" onClick={closeMenu} aria-label="Hem">
          Hem
        </NavLink>
        <NavLink to="/filmer" onClick={closeMenu} aria-label="Filmer">
          Filmer
        </NavLink>
        <NavLink to="/arkiv" onClick={closeMenu} aria-label="Arkiv">
          Arkiv
        </NavLink>
        <NavLink
          to="/forelasningar"
          onClick={closeMenu}
          aria-label="Föreläsningar"
        >
          Föreläsningar
        </NavLink>
      </nav>
    </>
  );
}

export default PopUpMain;
