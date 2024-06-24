import { useEffect, useState } from 'react'
import '../CharacterList.css'
import Character from './Character'
import JojoCharacter from './JojoCharacter'
import CharacterForm from './CharacterForm'

const CharacterList = ({jojoCharacters}) => {

  return (
    <div className='container' >
        <div className='row row-cols-5'>{
          
        jojoCharacters.map(character => {
          return (
            <div className='col' key={character.id}>
            <Character character={character}/>
            </div>
          )
        })
       }
       </div>
      
      
    
       </div>
  )
}

export default CharacterList