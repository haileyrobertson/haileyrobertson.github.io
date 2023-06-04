import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

// create react component for page as standalone variable
const indexPage = () => {
  return (
    <Layout>
      <h2>Hello!</h2>
      <p>
        I am a data research analyst in the Data Lab with Dr. Ellie Graeden at
        the Georgetown University Center for Global Health Science and Security.
        I graduated from the University of Southern California with a B.S. in
        Global Health and a minor in Human Security and Geospatial Intelligence.
      </p>
      <p>
        My research interests include emerging infectious diseases, global
        health policy, and predictive analytics. I apply machine learning,
        network science, and other computational approaches to address
        challenges related to spillover risk and outbreak detection,
        decision-making for emergency response, and data-sharing in global
        health.
      </p>
    </Layout>
  );
};

export default indexPage;
