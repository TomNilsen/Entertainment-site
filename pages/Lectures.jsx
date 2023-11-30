import React, { useEffect, useState } from "react";
import PageLoad from "../components/PageLoad";
import IMG2 from "../images/Lasse_Nilsen.jpg";
import { ALT, H2, H3, P4 } from "../data/data";
import { SheetID, LectureSheet, SheetRange } from "../data/APIauth";

function Lectures() {
  const [Lectures, setLectures] = useState([]);
  useEffect(() => {
    async function getQuotes() {
      const RESPONSE = await fetch(
        `https://docs.google.com/spreadsheets/d/${SheetID}/gviz/tq?sheet=${LectureSheet}&range=${SheetRange}`
      );

      const DATA = await RESPONSE.text();

      const Data2 = DATA.substr(47).slice(0, -2);

      const Data3 = JSON.parse(Data2);

      const Array = Data3.table.rows;

      const EmptyArray = [];

      Array.map((lecture) => {
        const element = {
          data: lecture.c[0].v,
        };
        EmptyArray.push(element);
      });

      setLectures(EmptyArray);
    }
    getQuotes();
  }, []);
  return (
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
              {Lectures.map((lecture) => {
                return <li key={Math.random()}>{lecture.data}</li>;
              })}
            </ul>
          </div>
        </article>
      </div>
    </PageLoad>
  );
}

export default Lectures;
