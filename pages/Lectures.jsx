import React from "react";
import PageLoad from "../components/PageLoad";
import IMG2 from "../images/Lasse_Nilsen.jpg";
import { ALT, H2, H3, LI1, LI2, LI3, LI4, LI5, LI6, P4 } from "../data/data";

function Lectures() {
  return (
    <>
      <PageLoad>
        <div className="lectures">
          <h2>{H2}</h2>

          <article>
            <p>{P4}</p>
          </article>

          <article className="imgContainer">
            <h3>{H3}</h3>

            <div>
              <img src={IMG2} alt={ALT} />

              <ul>
                <li>{LI1}</li>
                <li>{LI2}</li>
                <li>{LI3}</li>
                <li>{LI4}</li>
                <li>{LI5}</li>
                <li>{LI6}</li>
              </ul>
            </div>
          </article>
        </div>
      </PageLoad>
    </>
  );
}

export default Lectures;
