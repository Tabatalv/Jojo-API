import { useEffect, useState } from 'react'
import '../CharacterList.css'
import Character from './Character'
import JojoCharacter from './JojoCharacter'
import CharacterForm from './CharacterForm'

const CharacterList = ({jojoCharacters}) => {
    // const [characters, setCharacters] = useState([]);
    // const [loading, setloading] = useState(true)

  // useEffect(() =>{
  //   async function fetchData(){
  //     const response = await fetch("https://stand-by-me.herokuapp.com/api/v1/characters")
  //     const data = await response.json()
  //     setloading(false)
  //     setCharacters(data)
  //     console.log(data)
  //   }
  //   fetchData()
  // }, []);



  return (
    <div className='container' >
      {console.log("datos"+jojoCharacters)}
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