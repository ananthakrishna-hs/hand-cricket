import React, { useContext } from 'react';
import { Header, Footer, Home, ImageContext } from './components';
import './App.css';

const App = () => {
  const [currentScreen] = useContext(ImageContext).screen;
  const [url] = useContext(ImageContext).img;
  return (
    <React.Fragment>
      <Header></Header>
      {
        currentScreen === 'home' && (
          <Home />
        )
      }
      {
        currentScreen === 'game' && (
        <div>{url}</div>
        )
      }
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
