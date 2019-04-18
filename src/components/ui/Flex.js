import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	flex-flow: row wrap;

  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.alignContent && `align-content: ${props.alignContent};`}
  ${(props) => props.flexGrow && `flex-grow: ${props.flexGrow};`}
	${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}

  /** Grid **/
  ${(props) =>
    props.grid &&
    `
    margin:0 0 0 -.5rem;
    /** offset margin to the left and avoid horizontal scrollbar**/

    > * {
      flex: 1;
    }

    > *:last-child {
      margin-right: 0;
    }
    `}

  /** Gutters **/
  ${(props) =>
    props.gutter &&
    props.flexDirection === 'column' &&
    `> * { margin-bottom: ${props.gutter}px; } `}

  ${(props) =>
    props.gutter && props.grid && `> * { margin-bottom: ${props.gutter}px; } `}
`;

Flex.propTypes = {
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
  ]),
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexGrow: PropTypes.number,
};

export default Flex;
