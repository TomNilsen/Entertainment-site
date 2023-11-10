import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Movies from "./pages/Movies";
import Arcive from "./pages/Arcive";
import Lectures from "./pages/Lectures";
import SideBar from "./components/SideBar";
import Book from "./pages/Book";
import PopUpMain from "./components/PopUpMain";
import { Facebook, Instagram, Linkedin, Tiktok } from "react-bootstrap-icons";
import logo from "./images/Lassetriple_highres.jpg";
import { ALT, H1, fbLink, igLink, liLink, ttLink } from "./data/data";

function App() {
  return (
    <>
      <header>
        <Link to="/" aria-label="Hem">
          <img src={logo} alt={ALT} />
          <h1>{H1}</h1>
        </Link>
        <Nav />
        <PopUpMain />
      </header>
      <main>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/arcive" element={<Arcive />} />
            <Route path="/lectures" element={<Lectures />} />
            <Route path="/book" element={<Book />} />
          </Routes>
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
              <Instagram aria-label="Instagram"/>
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
              <Facebook aria-label="Facebook"/>
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
              <Linkedin aria-label="Linkedin"/>
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
              <Tiktok aria-label="TikTok"/>
              <p>TikTok</p>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
