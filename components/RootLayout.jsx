import { NavLink, Outlet } from "react-router-dom";

import Nav from "./Nav";
import SideBar from "./SideBar";
import PopUpMain from "./PopUpMain";
import { Facebook, Instagram, Linkedin, Tiktok } from "react-bootstrap-icons";
import logo from "../images/Lassetriple_highres.jpg";
import { ALT, H1, fbLink, igLink, liLink, ttLink } from "../data/data";

function RootLayout() {
  return (
    <>
      <header>
        <NavLink to="/" aria-label="Hem">
          <img src={logo} alt={ALT} />
          <h1>{H1}</h1>
        </NavLink>
        <Nav />
        <PopUpMain />
      </header>
      <main>
        <section>
            <Outlet />
        </section>
        <aside>
          <SideBar />
        </aside>
      </main>
      <footer>
        <ul>
          <li>
            <a
              href={igLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram aria-label="Instagram" />
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a
              href={fbLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook aria-label="Facebook" />
              <p>Facebook</p>
            </a>
          </li>
          <li>
            <a
              href={liLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <Linkedin aria-label="Linkedin" />
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a
              href={ttLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <Tiktok aria-label="TikTok" />
              <p>TikTok</p>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default RootLayout;
