import React, { useState, useContext } from 'react';
import 'components/Home/Home.css';
import { ImageContext } from 'components';

/**
 * @component The home screen of application
 * @description Contains input for avatar upload, which can be skipped and stores in context
 */
const Home = () => {
  const [errorUpload, setError] = useState(false);
  const [url, setUrl] = useContext(ImageContext).img;
  const [setScreen] = useContext(ImageContext).screen.slice(-1);

  /**
   * @function To handle image upload by user
   * @param {event} e The upload event
   * @description Checks whether the uploaded file is image and stores in context
   */
  const handleImageUpload = e => {
    e.preventDefault();
    if (e.target.files[0].type.includes('image')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrl(reader.result);
      }
      reader.readAsDataURL(e.target.files[0]);
      
    } else {
      setError(true);
      setUrl(null);
    }
  }

  /**
   * @function To start the game
   */
  const startGame = () => {
    setScreen('TOSS')
  }
  
  return (
    <main>
      <h3>
        Play along!
      </h3>
      <p>
        Rules:
      </p>
      <ul className="rules-list">
        <li>Select heads/tails for the toss.</li>
        <li>Select whether you want to bat or bowl first.</li>
        <li>For every ball select the number you want to put. The number put by player who is batting gets added to score. The bowler has to guess and put the same number for the batsman to get out.</li>
        <li>The player batting first must defend his score while the player batting second must hit atleast one run more than the other to win, you know like Cricket.</li>
      </ul>
      <p>Note: The computer player doesnot know what you have selected, it just puts a random number.</p>
      <p className="avatar-upload">
        <label>
          Upload your avatar<br/>
          <input 
            type="file" 
            accept="image/*" 
            onChange={e => handleImageUpload(e)}
          />
        </label>
        {
          errorUpload && (
            <span className="error">Invalid file</span>
          )
        }
      </p>
      {
        url && (
          <img className="avatar-img" src={url} alt="Avatar" />
        )
      }
      <br/>
      <button
        onClick={e => startGame(e)}
      >
        {
          url ? (
            <React.Fragment>
              Submit
            </React.Fragment>
          ) : (
            <React.Fragment>
              Skip
            </React.Fragment>
          )
        }
      </button>
    </main>
  );
}

export default Home;