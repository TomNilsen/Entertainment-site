import React, { useEffect } from "react";
import PageLoad from "../components/PageLoad";
import { SheetID, MovieSheet, SheetRange } from "../data/APIauth";
import { useState } from "react";

function Movies() {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const RESPONSE = await fetch(
        `https://docs.google.com/spreadsheets/d/${SheetID}/gviz/tq?sheet=${MovieSheet}&range=${SheetRange}`
      );

      const DATA = await RESPONSE.text();

      const Data2 = DATA.substr(47).slice(0, -2);

      const Data3 = JSON.parse(Data2);

      const Array = Data3.table.rows;

      const EmptyArray = [];

      Array.map((movie) => {
        const element = {
          link: movie.c[0].v,
          title: movie.c[1].v,
        };
        EmptyArray.push(element);
      });
      setMovies(EmptyArray);
    }
    getMovies();
  }, []);
  return (
    <PageLoad>
      <div className="movies">
        <h2>Filmer</h2>

        <div>
          {Movies.map((movie) => {
            return (
              <article key={Math.random()}>
                <iframe
                  src={movie.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h3>{movie.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </PageLoad>
  );
}

export default Movies;
