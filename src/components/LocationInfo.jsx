import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <div>
        <h2>{location?.name}</h2>
        <ul>
            <li>
                <p><b>Type: </b>{location?.type}</p>
            </li>
            <li>
                <p><b>Dimension: </b>{location?.dimension}</p>
            </li>
            <li>
                <p><b>Population: </b>{location?.residents.length}</p>
            </li>
        </ul>
    </div>
  )
}

export default LocationInfo