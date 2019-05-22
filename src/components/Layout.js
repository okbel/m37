import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../utils/style.css';
import AnnouncementBar from './AnnouncementBar';
import Footer from './Footer';
import Header from './header';
import Wrapper from './Wrapper';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
        dataJson {
          layout {
            announcementBar {
              text
            }
            footer {
              text
              links {
                name
                path
              }
            }
          }
        }
      }
    `}
    render={({
      site,
      dataJson: {
        layout: { announcementBar, footer },
      },
    }) => (
      <>
        <AnnouncementBar data={announcementBar} />
        <Wrapper>
          <Header siteTitle={site.siteMetadata.siteTitle} />
          <main>{children}</main>
          <Footer data={footer} />
        </Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
