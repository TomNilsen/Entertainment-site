import React, { useEffect, useState } from "react";
import PageLoad from "../components/PageLoad";
import { SheetID, QuoteSheet, SheetRange } from "../data/APIauth";

function Arcive() {
  const [Quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function getQuotes() {
      const RESPONSE = await fetch(
        `https://docs.google.com/spreadsheets/d/${SheetID}/gviz/tq?sheet=${QuoteSheet}&range=${SheetRange}`
      );

      const DATA = await RESPONSE.text();

      const Data2 = DATA.substr(47).slice(0, -2);

      const Data3 = JSON.parse(Data2);

      const Array = Data3.table.rows;

      const EmptyArray = [];

      Array.map((quote) => {
        const element = {
          quote: quote.c[0].v,
          author: quote.c[1].v,
        };
        EmptyArray.push(element);
      });

      setQuotes(EmptyArray);
    }
    getQuotes();
  }, []);
  return (
    <PageLoad>
      <div className="arcive">
        <h2>Arkiv</h2>

        {Quotes.map((fullQuote) => {
          return (
            <blockquote key={Math.random()}>
              <p className="quoteText">{fullQuote.quote}</p>
              <p className="qouteAuthor">{fullQuote.author}</p>
            </blockquote>
          );
        })}
      </div>
    </PageLoad>
  );
}

export default Arcive;
