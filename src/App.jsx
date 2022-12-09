import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  const [location, setLocation] = useState()

  const getDataDimensions = (Dimension) => {
    const url = `https://rickandmortyapi.com/api/location/${Dimension}`
    axios.get(url)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDataDimensions(getRandomNumber())
  }, [])


  const handleSubmit = event => {
    event.preventDefault()
    const dimensionSearch = event.target.serchValue.value
    getDataDimensions(dimensionSearch)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id='serchValue' type="text" placeholder="Search a dimention"/>
        <button type='submit'>Serch</button>
        <button>Random</button>
      </form>

      <h1>R&M Random Dimension: </h1>
      <LocationInfo location={location} />
      <section>
        {
          location?.residents.map(urlResident => ( <ResidentCard key={urlResident} urlResident={urlResident}/>
          ))
        }
      </section>
    </div>
  )
}

export default App
