import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
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
