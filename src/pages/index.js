import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Normalize from '../utils/Normalize.css';

const IndexPage = () => (
  <Layout>
    <Normalize />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Grid />
  </Layout>
);

export default IndexPage;
