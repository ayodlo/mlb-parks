import styled from 'styled-components';
import React from 'react';

const ListItemStyles = styled.div`
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  transition: transform ease-in-out 300ms, box-shadow ease-in-out 250ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.125);
  }
`;

const ListItem = (props) => {
  const { teamName, venueName, city } = props;
  return (
    <ListItemStyles>
      <div>{teamName}</div>
      <div>{venueName}</div>
      <div>{city}</div>
    </ListItemStyles>
  );
};

export default ListItem;
