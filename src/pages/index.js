import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import PhotoReel from '../components/home/photo-reel/photo-reel'; 

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <PhotoReel />
      <p style={{ marginTop: '3rem', maxWidth: '800px', marginInline: 'auto' }}>
        Welcome to my site! I am a disease ecologist and doctoral student at Yale. 
        My research focuses on using statistical and AI/ML models to understand how global 
        changes are upheaving the conditions for emerging infectious diseases, 
        and particularly arboviruses.
      </p>
    </div>
  </Layout>
);

export default IndexPage;