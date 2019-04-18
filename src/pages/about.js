import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        dataJson {
          about {
            title
            text
          }
        }
      }
    `}
    render={({
      dataJson: {
        about: { title, text },
      },
    }) => (
      <Layout>
        <SEO title="About" />
        <h1>{title}</h1>
        <p>{text}</p>
      </Layout>
    )}
  />
);

export default AboutPage;
