import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageContextProvider = (props) => {
  const [url, setUrl] = useState('');
  const [currentScreen, setScreen] = useState('HOME');
  const [batFirst, setBatFirst] = useState('');

  return (
    <ImageContext.Provider 
      value={{
        img: [url, setUrl],
        screen: [currentScreen, setScreen],
        batting: [batFirst, setBatFirst]
      }}
    >
      {props.children}
    </ImageContext.Provider>
  )
};