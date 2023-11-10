import React, { useEffect, useState } from "react";
import {
  ClockFill,
  Calendar2EventFill,
  GeoAltFill,
} from "react-bootstrap-icons";
import { SheetID, ShowSheet, SheetRange } from "../data/APIauth";

function SideBar() {
  const [Shows, setShows] = useState([]);

  useEffect(() => {
    async function getSows() {
      const RESPONSE = await fetch(
        `https://docs.google.com/spreadsheets/d/${SheetID}/gviz/tq?sheet=${ShowSheet}&range=${SheetRange}`
      );

      const DATA = await RESPONSE.text();

      const Data2 = DATA.substr(47).slice(0, -2);

      const Data3 = JSON.parse(Data2);

      const Array = Data3.table.rows;

      const EmptyArray = [];

      Array.map((show) => {
        const element = {
          title: show.c[0].v,
          date: show.c[1].v,
          time: show.c[2].v,
          location: show.c[3].v,
        };
        EmptyArray.push(element);
      });

      setShows(EmptyArray);
    }
    getSows();
  }, []);

  if (Shows.length === 0) {
    return (
      <div className="gigList">
        <h2>Nästa show</h2>
        <ul>
          <li id="noGigs">
            <p>Inga nya spelningar</p>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="gigList">
        <h2>Nästa show</h2>
        <ul>
          {Shows.map((gig) => {
            return (
              <li key={Math.random()}>
                <h3>{gig.title}</h3>
                <div>
                  <Calendar2EventFill aria-label="Datum"/>
                  <p>{gig.date}</p>
                </div>

                <div>
                  <ClockFill aria-label="Tid"/>
                  <p>{gig.time}</p>
                </div>

                <div>
                  <GeoAltFill aria-label="Plats"/>
                  <p>{gig.location}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideBar;
