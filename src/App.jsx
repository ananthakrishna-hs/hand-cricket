import React, { useContext } from 'react';
import { Header, Footer, Home, Game, Toss, ImageContext } from 'components';
import './App.css';

/**
 * @component The main starting component
 * @description Component displays the content based on user interactions stored in context
 */
const App = () => {
  const [currentScreen] = useContext(ImageContext).screen[0];
  return (
    <React.Fragment>
      <Header></Header>
      {
        currentScreen === 'HOME' && (
          <Home />
        )
      }
      {
        currentScreen === 'TOSS' && (
          <Toss />
        )
      }
      {
        currentScreen === 'GAME' && (
          <Game />
        )
      }
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
