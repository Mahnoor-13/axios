import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [joke, setJoke] = useState("")
  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      console.log(response);
      setJoke(response.data.setup + " ***** " + response.data.punchline)
    })
  }
  return (
    <div className="App">
      <h1>hello, Hunny bunny </h1>
      <button onClick={getJoke}>Get Joke</button>
      {joke}
    </div>
  );
}

export default App;
