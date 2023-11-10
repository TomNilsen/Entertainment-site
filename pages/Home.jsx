import React from "react";
import { Link } from "react-router-dom";
import PageLoad from "../components/PageLoad";
import mainIMG from "../images/Lasse_in_the_sky.jpg";
import SideBar from "../components/SideBar";
import { ChevronDown } from "react-bootstrap-icons";
import { Link as ScrollLink } from "react-scroll";
import { ALT, P1, P2, P3 } from "../data/data";

function Home() {
  return (
    <PageLoad>
      <div className="home">
        <ScrollLink
          className="mobileGigLink"
          to="mobileShowList"
          smooth={true}
          offset={-125}
          duration={500}
          aria-label="Nästa show"
        >
          <p>Nästa show</p>
          <ChevronDown />
        </ScrollLink>

        <div>
          <img src={mainIMG} alt={ALT} />
          <Link to="book" aria-label="Bokning">Bokning</Link>
        </div>

        <article>
          <p>{P1}</p>
          <p>{P2}</p>
          <p>{P3}</p>
        </article>
        <section id="mobileShowList">
          <SideBar />
        </section>
      </div>
    </PageLoad>
  );
}

export default Home;
