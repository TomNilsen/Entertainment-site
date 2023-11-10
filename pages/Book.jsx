import React from "react";
import PageLoad from "../components/PageLoad";
import { Email, P5 } from "../data/data";

function Book() {
  return (
    <>
      <PageLoad>
        <div className="book">
          <h2>Boka</h2>
          <p>{P5}</p>
          <form action={`https://formsubmit.co/${Email}`} method="POST">
            <div class="firstName">
              <label htmlFor="name1">Förnamn</label>
              <input type="text" name="Förnamn" id="name1" required />
            </div>
            <div class="lastName">
              <label htmlFor="name2">Efternamn</label>
              <input type="text" name="Efternamn" id="name2" required />
            </div>
            <div class="eMail">
              <label htmlFor="mail">E-mail</label>
              <input type="email" name="E-mail" id="email" required />
            </div>
            <div class="type">
              <label htmlFor="kundtyp">Kundtyp</label>

              <div>
                <input
                  type="radio"
                  name="Kundtyp"
                  id="privat"
                  value="Privat"
                  required
                />
                <label htmlFor="privat">Privat</label>

                <input
                  type="radio"
                  name="Kundtyp"
                  id="foretag"
                  value="Företag"
                  required
                />
                <label htmlFor="foretag">Företag</label>
              </div>
            </div>
            <div class="adress">
              <label htmlFor="adress">Adress</label>
              <input type="text" name="Adress" id="adress" required />
            </div>
            <div class="date">
              <label htmlFor="datum">Datum</label>
              <input type="date" name="Datum" id="datum" required />
            </div>
            <div class="time">
              <label htmlFor="tid">Tid</label>
              <input type="time" name="Tid" id="tid" required />
            </div>
            <div className="info">
              <label htmlFor="info">Info</label>
              <textarea name="Info" id="info" required />
            </div>
            <div class="submit">
              <button type="submit" aria-label="Skicka">
                Skicka
              </button>
            </div>
          </form>
        </div>
      </PageLoad>
    </>
  );
}

export default Book;
