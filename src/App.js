import Navigation from './_shared/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home/Home';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  /*TYPOGRAPHY*/
  h1 {
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 64px;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 25px;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
  }

  p,
  li {
    font-family: 'Open Sans', sans-serif;
    line-height: 28px;
  }

  a,
  button {
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .date {
    color: #111;
    display: block;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    text-align: center;
    z-index: 1;
  }

  .date:before {
    border-top: 1px solid #111;
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  .author {
    color: #111;
    display: block;
    font-family: 'Open Sans', sans-serif;
    padding-bottom: 38px;
    position: relative;
    text-align: center;
    z-index: 1;
  }

  .author:before {
    border-top: 1px solid #111;
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  .date span,
  .author span {
    background: #fdfdfd;
    padding: 0 10px;
  }

  .line {
    border-top: 1px solid #111;
    display: block;
    margin-top: 60px;
    padding-top: 50px;
    position: relative;
  }

  .read-more {
    -moz-border-radius: 50%;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-border-radius: 50%;
    -webkit-transition: all 0.2s ease-in-out;
    background: #111;
    border-radius: 50%;
    border: 10px solid #fdfdfd;
    color: #fff;
    display: block;
    font-family: 'Open Sans', sans-serif;
    height: 80px;
    line-height: 80px;
    margin: -40px 0 0 -40px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    text-align: center;
    width: 80px;
  }

  .read-more:hover {
    background: #990000;
    text-decoration: none;
  }
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
