import styled from 'styled-components';
import React from 'react';

const Image = styled.img`
  width: 100%;
`;

const Container = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  padding: 1em;
  transition: transform ease-in-out 300ms, box-shadow ease-in-out 250ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.125);
  }
`;

const TextContainer = styled.div`
  margin-top: 1em;
  width: 100%;
`;

const VenueName = styled.p`
  font-weight: 900;
`;

const City = styled.p`
  color: gray;
  padding: 0.5em;
  font-size: 0.7rem;
`;

const Visited = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  width: 90%;
  margin: 0 auto;
  font-weight: 900;
  font-size: 0.7rem;
`;

const PicButton = styled.button`
  color: gray;
  border: 1px solid gray;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 0.7rem;
  padding: 0 8px;
`;

const ListItem = (props) => {
  const { teamName, venueName, city } = props;
  return (
    <Container>
      <Image src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'></Image>
      <TextContainer>
        <VenueName>{venueName}</VenueName>
        <City>City: {city}</City>
        <Visited>
          <p>Visited: Yes</p>
          <PicButton>Pic</PicButton>
        </Visited>
      </TextContainer>
    </Container>
  );
};

export default ListItem;
