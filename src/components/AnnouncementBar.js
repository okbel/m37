import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  height: 50px;
  text-align: center;
  background-color: #3549bb;
  color: #fff;
  line-height: 50px;
`;

const AnnouncementBar = ({ data }) => <Bar>{data.text}</Bar>;

export default AnnouncementBar;
