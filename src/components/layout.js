import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import AnnouncementBar from './AnnouncementBar';
import Footer from './Footer';
import Grid from './Grid';
import Header from './header';
import Wrapper from './Wrapper';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <div>{children}</div>
        <AnnouncementBar />
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>
            <Grid />
          </main>
          <Footer />
        </Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
