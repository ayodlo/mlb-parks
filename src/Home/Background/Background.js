import styled from 'styled-components';
import backgroundImage from './mlb-park-unsplash.jpg';

const BackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  z-index: -1;
`;

const BackgroundOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: -1;
`;

const Background = () => {
  return (
    <>
      <BackgroundImage />
      <BackgroundOverlay />
    </>
  );
};

export default Background;
