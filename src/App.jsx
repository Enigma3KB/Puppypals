import gifImage from '../src/assets/Images/scoob.gif';
import puppyBarkSound from '../src/assets/Sounds/puppy_bark.mp3';
import { useState, useRef } from 'react';
import { puppyList } from './data.js';
import './App.css';
import './index.css';

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const audioRef = useRef(null);

function handleClick(puppyId) {
  setFeatPupId(puppyId);
  audioRef.current.play();
}
const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log(featuredPup);


  return (
    
    <div className="App">
      
            <h1>Puppiez-R-Us</h1>
            
      {puppies.map((puppy) => (
        
        <button onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
          
        </button>
        
      ))}
      {featPupId && (
        
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      
      <img src={gifImage} alt="Scoob GIF" />
      <audio ref={audioRef} src={puppyBarkSound} autoPlay></audio>     
    </div>
                        
  );
}

export default App;
