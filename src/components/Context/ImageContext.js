import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageContextProvider = (props) => {
  const [url, setUrl] = useState('');
  const [currentScreen, setScreen] = useState('home');

  return (
    <ImageContext.Provider 
      value={{
        img: [url, setUrl],
        screen: [currentScreen, setScreen]
      }}
    >
      {props.children}
    </ImageContext.Provider>
  )
};