import React from 'react'

function Character({character}) {
  return (
    <div className='text-center p-5'>
        <h2>{character.name}</h2>
        <img className="rounded-0 border border-info" width={80}  src=	{"https://jojos-bizarre-api.netlify.app/assets/"+character.image} alt={character.name}/>
        <h3>{character.chapter}</h3>
    </div>
  )
}

export default Character