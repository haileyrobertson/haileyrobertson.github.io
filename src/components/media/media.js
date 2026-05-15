import React from "react";
import "../publications/publications.css";
import mediaItems from "../../data/media";

const Media = () => (
  <div className="publications">
    <section>
      <header>
        <h1>Public Scholarship</h1>
      </header>

      {Object.entries(mediaItems)
        .sort((a, b) => b[0] - a[0])
        .map(([year, items]) => (
          <div key={year} className="pub__row">

            {/* YEAR COLUMN */}
            <div className="pub__year">
              {year}
            </div>

            {/* CONTENT COLUMN */}
            <ul className="pub__list">
              {items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>{" "}

                  {item.authors && (
                    <span>{item.authors} </span>
                  )}

                  {item.outlet && <em>{item.outlet}</em>}{" "}

                  {item.date && <span>{item.date}</span>}
                </li>
              ))}
            </ul>

          </div>
        ))}
    </section>
  </div>
);

export default Media;