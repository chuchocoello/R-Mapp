import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({urlResident}) => {
const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(urlResident)
          .then(res => setCharacter(res.data))
          .catch(err => console.log(err))
      }, [])
      console.log(character)

  return (
    <div>
        <h3>{character?.name}</h3>
        <img src={character?.image} alt="" />
        <p><b>Status: </b>{character?.status}</p>
        <p><b>Species: </b>{character?.species}</p>
        <p><b>Origin: </b>{character?.origin.name}</p>
        <p><b>ID: </b>{character?.id}</p>
        <p><b>Episodes: </b>{character?.episode.length}</p>

    </div>
  )
}

export default ResidentCard