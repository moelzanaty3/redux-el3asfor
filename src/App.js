import audioEl3asofra from "./el3asfor.mp3";
import "./App.css";

function App() {
  const audio = new Audio(audioEl3asofra);
  audio.loop = true;

  const handlePlayAudio = () => {
    audio.play();
  };

  const handlePauseAudio = () => {
    audio.pause();
  };

  return (
    <div className="App">
      <header className="App-header">
        Redux Action El 3asfor Audio
        <audio>
          <source src={audioEl3asofra} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="App-actions">
          <button className="primary" onClick={handlePlayAudio}>
            PLAY
          </button>
          <button className="danger" onClick={handlePauseAudio}>
            Pause
          </button>
        </div>
        <main className="Counter">
          <p className="count">0</p>
        </main>
      </header>
    </div>
  );
}

export default App;
