import React, { useContext, useState } from 'react';
import { ImageContext } from 'components';
import bat from 'assets/cricket-bat.png';
import ball from 'assets/ball.png';
import computer from 'assets/laptop.png';
import user from 'assets/user.png';
import 'components/Game/Game.css';

const Game = () => {
  const [batFirst, setBatFirst] = useContext(ImageContext).batting;
  const [currentBatting, setBatting] = useState(batFirst);
  const [currentRun, setRun] = useState('');
  const [disableFactor, disableButton] = useState(false);
  const [avatarAnime, setAnime] = useState(false);
  const runs = [1, 2, 3, 4, 5, 6];
  const [url, setUrl] = useContext(ImageContext).img;
  const [userOutCome, setUserOutcome] = useState(0);
  const [computerOutCome, setComputerOutcome] = useState(0);
  const [inning, setInning] = useState('FIRST');
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [setScreen] = useContext(ImageContext).screen.slice(-1);

  const score = run => {
    disableButton(true);
    setAnime(true);
    setTimeout(() => {
      disableButton(false);
      setAnime(false);
      processScore(run)
    }, 3000);
  }

  const processScore = run => {
    const compOutcome = Math.floor(Math.random() * 6) + 1;
    setUserOutcome(run);
    setComputerOutcome(compOutcome);
    if (currentBatting === 'USER') {
      if (inning === 'FIRST') {
        if (compOutcome !== run) {
          setRun(run);
          setUserScore(userScore + run);
        } else {
          setRun('WICKET');
          setBatting('COMPUTER');
          setInning('SECOND');
        }
      } else {
        if (compOutcome !== run) {
          if (userScore + run >= compScore + 1) {
            setRun('You win the game');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun(run);
          }
          setUserScore(userScore + run);
        } else {
          if (userScore + run === compScore) {
            setRun('Match tied');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun('You lost the game!');
            setInning('GAME OVER');
            disableButton(true);
          }
        }
      }
    } else {
      if (inning === 'FIRST') {
        if (compOutcome !== run) {
          setRun(compOutcome);
          setCompScore(compScore + compOutcome);
        } else {
          setRun('WICKET');
          setBatting('USER');
          setInning('SECOND');
        }
      } else {
        if (compOutcome !== run) {
          if (compScore + run >= userScore + 1) {
            setRun('You lost the game!');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun(compOutcome);
          }
          setCompScore(compScore + compOutcome);
        } else {
          if (compScore + compOutcome === userScore) {
            setRun('Match tied');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun('You win!');
            setInning('GAME OVER');
            disableButton(true);
          }
        }
      }
    }
  }

  return (
    <main>
      <h3>
        Game
      </h3>
      <div className="avatar-container">
        <div>
          <h4>User</h4>
          Runs: { userScore }
          {
            currentBatting === 'USER' ? (
              <img src={bat} className='indicator-image' alt='Player batting' />
            ) : (
              <img src={ball} className='indicator-image' alt='Player bowling' />
            )
          }
          {
            url ? (
              <img className={`avatar-img game ${avatarAnime ? 'animate' : ''}`} src={url} alt="Player Avatar" />
            ) : (
              <img className={`avatar-img game ${avatarAnime ? 'animate' : ''}`} src={user} alt="Player Avatar" />
            )
          }
        </div>
        <div className="run-container">
          { `Inning: ${inning}` }
          <br/>
          {
            isNaN(currentRun) ? (
              <React.Fragment>
                { currentRun }
              </React.Fragment>
            ) : (
              <React.Fragment>
                { `This ball: ${currentRun}` }
              </React.Fragment>
            )
          }
          <br/>
          { userOutCome.toString() + ' : ' + computerOutCome.toString() }
          <br/>
          {
            inning === 'GAME OVER' && (
              <React.Fragment>
                <p>Good game! See you soon!</p>
                <button
                  onClick={() => {setUrl(''); setBatFirst(''); setScreen('HOME');}}
                >
                  Home
                </button>
                <button
                  onClick={() => {setBatFirst(''); setScreen('TOSS');}}
                >
                  Restart game
                </button>
              </React.Fragment>
            )
          }
        </div>
        <div>
          <h4>Computer</h4>
          Runs: {compScore}
          {
            currentBatting === 'COMPUTER' ? (
              <img src={bat} className='indicator-image' alt='Computer batting' />
            ) : (
              <img src={ball} className='indicator-image' alt='Computer bowling' />
            )
          }
          <img className={`avatar-img game ${avatarAnime ? 'animate' : ''}`} src={computer} alt="Player Avatar" />
        </div>
      </div>
      <div className="buttons-container">
        {
          runs.map(r => (
            <button 
              disabled={disableFactor} 
              key={r} 
              className="run-button"
              onClick={() => score(r)}
            >
              { r }
            </button>
          ))
        }
      </div>
    </main>
  );
}

export default Game;