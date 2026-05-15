import React from "react";

import Layout from "../../components/layout/layout";
import SEO from "../../components/seo/seo";
import Publications from "../../components/publications/publications";

const IndexPage = () => (
  <Layout>
    <SEO title="Research" />

    <Publications />
  </Layout>
);

export default IndexPage;