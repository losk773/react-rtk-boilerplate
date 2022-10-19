import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: black;
  text-transform: uppercase;
  color: #fff;
`;

export const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};
