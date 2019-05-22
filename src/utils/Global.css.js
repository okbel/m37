import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,800&display=swap');

	html, body, div, span,
	h1, h2, h3, h4, h5, h6,
	a, abbr, acronym, address, big, cite, code,
	dl, dt, dd, ol, ul, li,
	table {
    margin: 0;
    padding: 0;
 }

  html, body {
    height: 100%;
    background-color: black;
    color: #86879c;
    margin: 0;
    padding: 0;
    border:0;
  }

  blockquote {
    background-color:#f2f2f4
    border-radius: 8px;
    padding: 10px 15px;
    text-align: justified;
    color: #6f7c82;
    font-size: 14px;
    line-height: 1.9;
  }

  body {
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: 'Nunito Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
    text-decoration: none;
		font-size: 14px;
		position: relative;

    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }

  ol, ul, li {
    list-style: none;
    text-decoration: none;
  }

  a {
    color: #86879c;
    text-decoration: none;
    text-decoration:none;
    :hover {
      color:black;
    }
  }
`;

export default GlobalStyle;
