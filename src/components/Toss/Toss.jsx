import React, { useState, useContext } from 'react';
import { ImageContext } from 'components';
import 'components/Toss/Toss.css';
import coin from 'assets/coin.png';

const Toss = () => {
  const [toss, setToss] = useState('');
  const [spinner, startSpin] = useState(false);
  const outcomes = ['Heads', 'Tails'];
  const choice = ["Bat", 'Bowl'];
  const [result, setResult] = useState('');
  const [batFirst, setBatFirst] = useContext(ImageContext).batting;
  const [setScreen] = useContext(ImageContext).screen.slice(-1);

  const spinCoin = o => {
    startSpin(true);
    setTimeout(() => {
      const outcome = Math.floor(Math.random() * 2);
      setToss(outcomes[outcome]);
      if (outcomes[outcome] === o) {
        setResult('WON');
      } else {
        setResult('LOST');
        const inning = Math.floor(Math.random() * 2);
        setInnings(choice[inning]);
      }
    }, 3000);
  }

  const setInnings = (inning) => {
    if (inning === 'Bat') {
      setBatFirst('USER');
    } else {
      setBatFirst('COMPUTER');
    }
  }

  const play = () => {
    setScreen('GAME');
  }

  return (
    <main className="toss-container">
      <h3>
        Toss
      </h3>
      {
        !spinner && (
          <React.Fragment>
            <p>
              Select Heads or tails
            </p>
            <div className="buttons-container">
              {
                outcomes.map(o => (
                  <button
                    key={o}
                    className='run-button'
                    onClick={() => spinCoin(o)}
                  >
                    { o }
                  </button>
                ))
              }
            </div>
          </React.Fragment>
        )
      }
      {
        spinner && !toss && (
          <div className="spinner">
            <img src={coin}  alt="toss coin"/>
          </div>
        )
      }
      {
        toss && result && (
          <div>
            <p>Coin toss was {toss}</p>
            <p>You { result } the toss!</p>
            {
              result === "WON" && (
                <React.Fragment>
                  <p>You won the toss:</p>
                  <div className="buttons-container">
                    {
                      choice.map(c => (
                        <button
                          key={c}
                          className='run-button'
                          onClick={() => setInnings(c)}
                        >
                          { c }
                        </button>
                      ))
                    }
                  </div>
                </React.Fragment>
              )
            }
          </div>
        )
      }
      {
        batFirst && (
          <div>
            {
              batFirst === 'USER' ? (
                <p>You will Bat first</p>
              ) : (
                <p>You will bowl first</p>
              )
            }
            <button
              onClick={() => play()}
            >
              Play
            </button>
          </div>
        )
      }
    </main>
  );
}

export default Toss;