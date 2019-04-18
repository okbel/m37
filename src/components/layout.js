import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../style.css';
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
            title
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
          <Header siteTitle={site.siteMetadata.title} />
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
