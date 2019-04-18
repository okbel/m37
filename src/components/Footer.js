import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding-top: 60px;
  background-color: #222;
  color: #fff;
  height: 120px;
  text-align: center;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const Item = styled.li`
  display: inline-flex;
  margin-right: 10px;
  a {
    color: #ffca00;
    text-decoration: none;
  }
`;

const Text = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Footer = ({ data }) => (
  <Root>
    <Menu>
      {data.links.map((i) => (
        <Item>
          <Link to={i.path}>{i.name}</Link>
        </Item>
      ))}
    </Menu>
    <Text>{data.text}</Text>
  </Root>
);

export default Footer;
