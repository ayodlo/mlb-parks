import styled from 'styled-components';
import React from 'react';

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.5rem;
  border-radius: 1rem;
  margin: 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: transform ease-in-out 300ms, box-shadow ease-in-out 250ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.125);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 10px;
  }
`;

const Card = (props) => {
  const { stadiumName, teamName, city, visited } = props;
  return (
    <CardStyles>
      <div>{teamName}</div>
      <div>{stadiumName}</div>
      <div>{city}</div>
      <div>Visited: {visited}</div>
    </CardStyles>
  );
};

export default Card;
