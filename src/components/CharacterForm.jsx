import {useState, useEffect} from 'react'
import CharacterList from './CharacterList'
import { FaArrowRight } from "react-icons/fa";

function CharacterForm() {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true)

useEffect(() =>{
  async function fetchData(){
    const response = await fetch("https://stand-by-me.herokuapp.com/api/v1/characters")
    const data = await response.json()
    setloading(false)
    setCharacters(data)
    console.log(data)
  }
  fetchData()
}, []);

    

    const [jojoName, setJojoName] = useState("");
    const [searchedCharacter, setSearchedCharacter] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchedCharacter)
       
    }
    const jojoCharsByName = characters.filter((jojo) =>
          jojo.name.includes(jojoName)
      );
        console.log(jojoCharsByName)
    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input  onChange={(e) => setJojoName(e.target.value)} type="text" placeholder='Search for your favorite Jojo character!'value={jojoName} className='jojo-input' />
       <button onClick={ () =>  setSearchedCharacter(true)}><FaArrowRight/></button>
            
        
    </form>
    {
      loading ? <h1>Loading</h1> :
      <CharacterList jojoCharacters={jojoCharsByName}/>
    }
    
    </>
    
  )
}

export default CharacterForm