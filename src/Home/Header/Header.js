import styled from 'styled-components';

const Container = styled.div`
  background-color: #005596;
  background: linear-gradient(to bottom, transparent 50%, #005596 0%);
  margin: auto;
  margin-top: 50px;
  text-align: center;
  width: 400px;
  padding: 0.5em;
`;

const H1 = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 3.5em;
`;

const H2 = styled.h2`
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <Container>
      <H1>Name</H1>
      <H2>MLB Stadium Bucket List</H2>
    </Container>
  );
};

export default Header;
