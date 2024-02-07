import { useState, useRef } from 'react'
import './App.css'
import casnew from "../src/assets/casnew.mp3"
import hojayegi from "../src/assets/hojayegi.mp3"

const phrases = [
  "No 🙉",
  "Are you sure?",
  "Really Sure😢",
  "I'll be very sad😕",
  "Pookie Please🥺",
  "Don't do this to me🫤",
  "I'm gonna cry..😭",
  "You are breaking my heart😭💔",
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noSoundPlaying, setNoSoundPlaying] = useState(false);
  const [yesSoundPlaying, setYesSoundPlaying] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  // Using useRef to hold references to the audio elements
  const noSoundRef = useRef(new Audio(casnew));
  const yesSoundRef = useRef(new Audio(hojayegi));

  function handleYesClick() {
    setYesPressed(true);
    if (noSoundPlaying) {
      noSoundRef.current.pause();
      noSoundRef.current.currentTime = 0;
      setNoSoundPlaying(false);
    }
    if (!yesSoundPlaying) {
      yesSoundRef.current.play();
      setYesSoundPlaying(true);
    }
  }

  function handleNoClick() {
    setNoCount(noCount + 1);
    if (yesSoundPlaying) {
      yesSoundRef.current.pause();
      yesSoundRef.current.currentTime = 0;
      setYesSoundPlaying(false);
    }
    if (!noSoundPlaying) {
      noSoundRef.current.play();
      setNoSoundPlaying(true);
    }
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div className='text'>Yayyy !!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text'>Will you be my valentine 🌹?</div>
          <div className='both-Button'>
            <button className='yesButton'
              style={{ fontSize: yesButtonSize, backgroundColor: 'rgb(248, 229, 89)' }}
              onClick={handleYesClick}
            >
              Yes 🙈
            </button>
            <button
              className='NoButton'
              style={{}}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
