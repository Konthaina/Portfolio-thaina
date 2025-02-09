import  { useRef } from 'react';
import hoverSoundFile from '../../assets/effects/pop-sound-effect-226108.mp3';
import './home.css'

const Social = () => {
  const hoverSound = useRef(new Audio(hoverSoundFile)); 

  const playSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0; 
      hoverSound.current.play().catch((error) => {
        console.error('Error playing sound:', error);
      });
    }
  };

  console.log('Hello')

  return (
    <div className="home__social">
      <div className="group relative">
        <a
          href="https://github.com/Konthaina"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound} 
        >
          <i className="uil uil-github"></i>
        </a>
        <span className="tooltip-content">GitHub</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.linkedin.com/in/kon-thaina-5b30922aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <span className="tooltip-content">LinkedIn</span>
      </div>

      <div className="group relative">
        <a
          href="https://t.me/konthaina87"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-telegram-alt"></i>
        </a>
        <span className="tooltip-content">Telegram</span>
      </div>

      <div className="group relative">
        <a
          href="https://web.facebook.com/thainakon87/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-facebook"></i>
        </a>
        <span className="tooltip-content">Facebook</span>
      </div>
    </div>
  );
};

export default Social;
