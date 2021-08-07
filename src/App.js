import { useRef } from "react";
import { connect } from "react-redux";
import { incrementPlay, pausePlay } from "./redux";
import audioEl3asofra from "./el3asfor.mp3";
import "./App.css";

function App({ count, dispatch }) {
  const audioEl = useRef(null);

  const handlePlayAudio = () => {
    let current = audioEl.current;

    if (!current.paused && !current.ended) {
      current.pause();
    }
    // add counter
    dispatch(incrementPlay());
    // play audio again
    current.play();
  };

  const handlePauseAudio = () => {
    dispatch(pausePlay());
    audioEl.current.currentTime = 0;
    audioEl.current.pause();
  };

  return (
    <div className="App">
      <header className="App-header">
        Redux Action El 3asfor Audio
        <audio ref={audioEl}>
          <source src={audioEl3asofra} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="App-actions">
          <button className="primary" onClick={handlePlayAudio}>
            PLAY
          </button>
          <button className="danger" onClick={handlePauseAudio}>
            Stop
          </button>
        </div>
        <main className="Counter">
          <p className="count">{count}</p>
        </main>
      </header>
    </div>
  );
}

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps)(App);
