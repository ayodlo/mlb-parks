import styled from 'styled-components';

const Container = styled.div`
  background-color: #005596;
  background: linear-gradient(to bottom, transparent 45%, #005596 0%);
  margin: auto;
  margin-top: 50px;
  text-align: center;
  width: 100%;
  padding: 0.5em;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

const H1 = styled.h1`
  color: white;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <Container>
      <H1>Name</H1>
      <H2>MLB Bucket List</H2>
    </Container>
  );
};

export default Header;
