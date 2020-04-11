import React, { createContext, useState } from 'react';

/**
 * @component The context component
 */
export const ImageContext = createContext();

/**
 * @component The context provider
 * @param {JSX} props 
 * @description Holds data for displaying content, player batting first and avatar image
 */
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