import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import getRandomNumber from './utils/getRandomNumber';

function App() {
  const [location, setLocation] = useState();

  const getDataDimensions = (Dimension) => {
    const url = `https://rickandmortyapi.com/api/location/${Dimension}`;
    axios
      .get(url)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    randomClick();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dimensionSearch = event.target.serchValue.value;
    getDataDimensions(dimensionSearch);
  };

  const randomClick = () => {
    getDataDimensions(getRandomNumber());
  };

  return (
    <div className="App">
      <section className="header">
        <div className="serch">
        <h1>The Rick & Morty App</h1>
        <form onSubmit={handleSubmit}>
          <input id="serchValue" type="text" placeholder="Search a dimention" />
          <button type="submit">Serch</button>
        </form>
        <button onClick={randomClick}>Random</button>
        </div>
      </section>

      <section className="info">
      <LocationInfo location={location} />
      <div className='cards-container-box'>
        {location?.residents.map((urlResident) => (
          <ResidentCard key={urlResident} urlResident={urlResident} />
          ))}
      </div>
          </section>
    </div>
  );
}

export default App;
