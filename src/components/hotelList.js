import React from 'react';

const HotelList = ({ hotels }) => {
  return (
    <div>
      <h2>Hotel List</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            {hotel.name} - {hotel.address} (Opens at {hotel.openingTime})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
