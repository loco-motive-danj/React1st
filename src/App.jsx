import {puppyList} from './data.js'
import './App.css'
import './index.css'
import { useState } from 'react'

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <div className="App">
      <div className = "logo">
      {
        puppies.map((puppy) => {
          return <button onClick= {()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</button>;
        })
      }
       {featPupId && (

          <div className='read-the-docs'>
            <h1>{featuredPup.name}</h1>
            <ul>
              <a>Age: {featuredPup.age}</a>
              <a>Email: {featuredPup.email}</a>
            </ul>
          </div>
      )} 
    
      </div>
    </div>
  );
}

export default App;

