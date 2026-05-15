import React from "react";
import "./publications.css";
import publications from "../../data/publications";
import PublicationSection from "./publication-section";

const Publications = () => (
  <div className="publications">
    {Object.entries(publications).map(([key, section]) => {
      const isPeerReviewed = key === "peerReviewed";

      return (
        <section key={key}>
          <header>
            <h1>{section.title}</h1>
          </header>

          {isPeerReviewed && (
            <details className="access-note">
              <summary>Access note</summary>
              <p>
                If you’d like an ungated copy of any paper, feel free to reach out —
                happy to share.
              </p>
            </details>
          )}

          {section.years ? (
            Object.entries(section.years)
              .sort((a, b) => b[0] - a[0])
              .map(([year, items]) => (
                <div key={year}>
                  <header>
                    <h2>{year}</h2>
                  </header>
                  <PublicationSection title="" items={items} />
                </div>
              ))
          ) : (
            <PublicationSection title="" items={section.items} />
          )}
        </section>
      );
    })}
  </div>
);

export default Publications;