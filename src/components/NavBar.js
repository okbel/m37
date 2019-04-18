import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  flex: 1;
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
  padding: 7px 14px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 0.5px;

  a {
    text-decoration: none;
    color: #222;
    transition: color 0.15s ease-in;
  }

  ${(props) =>
    props.primary &&
    `background-color: #3549BB; color: #fff; a { color: #fff;}`}

  &:hover {
    a {
      color: #ffca00;
    }
  }
`;

const NavBar = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          dataJson {
            layout {
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
      `}
      render={(data) => (
        <Root>
          <Menu>
            {data.dataJson.layout.navBar.links.map((i) => (
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
