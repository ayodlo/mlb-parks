import Navigation from './_shared/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home/Home';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </Wrapper>
  );
};

export default App;
