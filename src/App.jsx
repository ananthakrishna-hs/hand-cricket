import React, { useContext } from 'react';
import { Header, Footer, Home, Game, Toss, ImageContext } from 'components';
import './App.css';

const App = () => {
  const [currentScreen] = useContext(ImageContext).screen;
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
