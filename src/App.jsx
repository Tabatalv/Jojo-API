import CharacterList from './components/CharacterList'
import Character from './components/CharacterList'
import { useEffect, useState } from 'react';
import CharacterForm from './components/CharacterForm'
import background from './Images/Jojo-wallpaper.jpg'
import './App.css'

function App() {
 
  return <div className =' text-white' style={{backgroundImage:`url(${background})`, backgroundRepeat: `repeat` }}>
    <h1 className='text-center display-1 py 4'>Jojo API</h1>
    <CharacterForm/>

  </div>
}

export default App
