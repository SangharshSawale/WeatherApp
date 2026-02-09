import './App.css'
import WeatherApp from './WeatherApp'
import background from './assets/background.mp4';

function App() {
  return (
    <>
      <video autoPlay loop muted className="videoBg">
        <source src={background} type="video/mp4" />
      </video>

      <WeatherApp />
    </>
  );
}

export default App;
