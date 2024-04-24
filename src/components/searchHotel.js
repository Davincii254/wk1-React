import React, { useState } from 'react';

const SearchHotel = ({ hotels }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const results = hotels.filter(
      (hotel) => hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Search Hotel</h2>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((hotel, index) => (
          <li key={index}>
            {hotel.name} - {hotel.address} (Opens at {hotel.openingTime})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHotel;
