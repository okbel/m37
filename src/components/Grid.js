import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
  flex-wrap: wrap;
`;

const Item = styled.div`
  position: relative;
  border: solid 1px #ffca00;
  background-color: white;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.15s ease-in;
  cursor: pointer;
  min-width: 340px;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 202, 0, 0.5);
  }
`;

const Number = styled.div`
  position: absolute;
  background-color: #ffca00;
  color: white;
  top: 0;
  left: 0;
  padding: 10px;
`;

const Center = styled.span`
  padding: 20px;
  box-sizing: border-box;
`;

const data = [
  {
    id: 1,
    title: 'GraphQL con Algo',
    date: 'Apr 15, 2019',
  },
  {
    id: 2,
    title: 'GraphQL con Algo',
    date: 'Apr 15, 2019',
  },
  {
    id: 3,
    title: 'GraphQL con Algo',
    date: 'Apr 15, 2019',
  },
  {
    id: 4,
    title: 'GraphQL con Algo',
    date: 'Apr 15, 2019',
  },
  {
    id: 5,
    title: 'GraphQL con Algo',
    date: 'Apr 15, 2019',
  },
  {
    id: 6,
    title: 'GraphQL con Algo',
    date: 'Apr 15, 2019',
  },
];

const Grid = () => (
  <Root>
    {data.map((i) => (
      <Item>
        <Number>Ep: {i.id}</Number>
        <Center>
          {i.title} - {i.date}
        </Center>
      </Item>
    ))}
  </Root>
);

export default Grid;
