import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  height: 50px;
  text-align: center;
  background-color: #da916d;
  color: #fff;
  line-height: 50px;
`;

const AnnouncementBar = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson {
            edges {
              node {
                announcementBar {
                  text
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Bar>{data.allDataJson.edges[0].node.announcementBar.text}</Bar>
      )}
    />
  );
};

export default AnnouncementBar;
