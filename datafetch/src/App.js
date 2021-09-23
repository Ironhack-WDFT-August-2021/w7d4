import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [characters, setCharacters] = useState([]);

  const [name, setName] = useState('');

  const handleChange = e => setName(e.target.value)

  useEffect(() => {
    // retrieve the data
    axios.get('https://swapi.py4e.com/api/people')
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch(err => console.log(err))
    // set the state
    // an empty dependency array makes sure all the logic 
    // gets only called once when the component rerenders
  }, [])

  useEffect(() => {
    console.log('name just changed')
    return () => {
      // this would get called if the component unmounts
      // this is where we would unsubscribe for services / clean things up
    }
  }, [name])


  return (
    <div className="App">
      <header className="App-header">
        {name ? <strong>Hello {name} 👋</strong> : 'Please type your name 🙂'}
        <input type="text" onChange={handleChange} />
        {characters.map(character => (
          <h3>{character.name}</h3>
        ))}
      </header>
    </div>
  );
}

export default App;
