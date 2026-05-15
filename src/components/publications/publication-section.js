import React from "react";

const renderAuthors = (authors) => {
  if (!authors) return null;

  const parts = authors.split(/,\s*/);

  return parts.map((a, idx) => {
    const clean = a.replace(/\.$/, "");

    return (
      <span key={idx}>
        {clean.includes("Robertson H") ? <strong>{clean}</strong> : clean}
        {idx < parts.length - 1 ? ", " : ""}
      </span>
    );
  });
};
const groupByYear = (items) => {
  return items.reduce((acc, item) => {
    const year = item.year || "n.d.";

    if (!acc[year]) acc[year] = [];
    acc[year].push(item);

    return acc;
  }, {});
};

const PublicationSection = ({ title, items }) => (
  <section>
    <header>
      <h1>{title}</h1>
    </header>

    {Object.entries(groupByYear(items))
  .sort((a, b) => b[0] - a[0])
  .map(([year, yearItems]) => (
    <div key={year} className="pub__row">
      
      {/* YEAR COLUMN */}
      <div className="pub__year">
        {year}
      </div>

      {/* CONTENT COLUMN */}
      <ul className="pub__list">
        {yearItems.map((item, i) => (
          <li key={i}>
            {item.authors && (
              <>
                {renderAuthors(item.authors)}.{" "}
              </>
            )}

            <span>{item.title}</span>{" "}

            {item.outlet && <em>{item.outlet}.</em>}{" "}

            {item.url && item.doiLabel && (
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.doiLabel}{" "}
              </a>
            )}

            {/* DATE optional */}
              {item.date && <span>{item.date}</span>}{" "}
          </li>
        ))}
      </ul>

    </div>
  ))}
  </section>
);

export default PublicationSection;