import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Root = styled.header`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.h1`
  flex: 0;
  a {
    text-decoration: none;
    color: blue;
  }
`;

const Header = ({ siteTitle }) => (
  <Root>
    <Logo>
      <Link to="/">M37</Link>
    </Logo>
    <NavBar />
  </Root>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
