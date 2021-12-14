import styled from 'styled-components';
import React from 'react';
import Card from './Card/Card';

//Styles for CardContainer
const CardContainerStyles = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 10rem;
`;

const CardContainer = () => {
  return (
    <CardContainerStyles>
      <Card
        stadiumName='Dodger Stadium'
        teamName='Dodgers'
        city='Los Angeles'
        visited='yes'
      ></Card>
      <Card
        stadiumName='Angel Stadium'
        teamName='Angels'
        city='Anaheim'
        visited='yes'
      ></Card>
      <Card
        stadiumName='Giants Stadium'
        teamName='Giants'
        city='San Francisco'
        visited='no'
      ></Card>
      <Card
        stadiumName='Yankee Stadium'
        teamName='Yankees'
        city='New York'
        visited='Yes'
      ></Card>
      <Card
        stadiumName='Brewer Stadium'
        teamName='Brewers'
        city='Milwaukee'
        visited='no'
      ></Card>
      <Card
        stadiumName='Dodger Stadium'
        teamName='Dodgers'
        city='Los Angeles'
        visited='yes'
      ></Card>
      <Card
        stadiumName='Angel Stadium'
        teamName='Angels'
        city='Anaheim'
        visited='yes'
      ></Card>
      <Card
        stadiumName='Giants Stadium'
        teamName='Giants'
        city='San Francisco'
        visited='no'
      ></Card>
      <Card
        stadiumName='Yankee Stadium'
        teamName='Yankees'
        city='New York'
        visited='Yes'
      ></Card>
      <Card
        stadiumName='Brewer Stadium'
        teamName='Brewers'
        city='Milwaukee'
        visited='no'
      ></Card>
      <Card
        stadiumName='Dodger Stadium'
        teamName='Dodgers'
        city='Los Angeles'
        visited='yes'
      ></Card>
      <Card
        stadiumName='Angel Stadium'
        teamName='Angels'
        city='Anaheim'
        visited='yes'
      ></Card>
      <Card
        stadiumName='Giants Stadium'
        teamName='Giants'
        city='San Francisco'
        visited='no'
      ></Card>
      <Card
        stadiumName='Yankee Stadium'
        teamName='Yankees'
        city='New York'
        visited='Yes'
      ></Card>
      <Card
        stadiumName='Brewer Stadium'
        teamName='Brewers'
        city='Milwaukee'
        visited='no'
      ></Card>
    </CardContainerStyles>
  );
};

export default CardContainer;
