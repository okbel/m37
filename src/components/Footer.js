import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding-top: 60px;
  background-color: #222;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 120px;
`;

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson {
            edges {
              node {
                footer {
                  text
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Root>{data.allDataJson.edges[0].node.footer.text}</Root>
      )}
    />
  );
};

export default Footer;
