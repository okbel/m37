import React from 'react';
import styled from 'styled-components';
const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Item = styled.div`
  position: relative;
  border: solid 1px #ffca00;
  background-color: white;
  height: 200px;
`;

const Number = styled.div`
  position: absolute;
  background-color: #ffca00;
  color: white;
  top: 0;
  left: 0;
  padding: 10px;
`;

const Center = styled.div``;

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
