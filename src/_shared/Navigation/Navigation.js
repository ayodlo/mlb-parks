import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const NavigationContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem;
  width: 100%;
  margin: 0;
  & a,
  & button {
    color: whitesmoke;
    text-decoration: none;
    padding: 1.5rem 2rem;
    border: none;
    transition: all 200ms ease-in-out;
    background-color: transparent;
  }
  & a:hover,
  & button:hover {
    color: #404751;
    cursor: pointer;
  }
`;

const Navigation = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      <Link to='/home'>Home</Link>
      {loggedIn === true ? <button>Login</button> : <button>Logout</button>}
    </NavigationContainer>
  );
};

export default Navigation;
