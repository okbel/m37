import 'normalize.css';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../style.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
);

export default IndexPage;
