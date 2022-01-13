import List from './List/List';
import Header from './Header/Header';
import Background from './Background/Background';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden; /* Hide scrollbars */
`;

const Home = () => {
  return (
    <Container>
      <Background />
      <Header />
      <List />
    </Container>
  );
};

export default Home;
