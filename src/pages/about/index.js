import React from 'react';

import AboutLayout from '../../components/about/about'; // Match the name from Step 1
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutLayout />
  </Layout>
);

export default AboutPage;