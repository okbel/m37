import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Root = styled.ul`
  flex: 1;
  height: 130px;
`;

const Menu = styled.ul`
  background-color: transparent;
  color: #fff;
  display: flex;
  flex-direction: row-reverse;
`;

const Item = styled.li`
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 10px;

  a {
    text-decoration: none;
    color: #222;
  }
  ${(props) =>
    console.log(props) || (props.primary && `background-color: yellow;`)}
`;

const NavBar = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson {
            edges {
              node {
                navBar {
                  links {
                    name
                    path
                    primary
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Root>
          <Menu>
            {data.allDataJson.edges[0].node.navBar.links.map((i) => (
              <Item primary={i.primary}>
                <Link to={i.path}>{i.name}</Link>
              </Item>
            ))}
          </Menu>
        </Root>
      )}
    />
  );
};

export default NavBar;
