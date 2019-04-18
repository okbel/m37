import 'normalize.css';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Grid />
  </Layout>
);

export default IndexPage;
