import React, { useState } from 'react';

const AddHotelForm = ({ onAddHotel }) => {
  // State for form fields
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [openingTime, setOpeningTime] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && address.trim() && openingTime.trim()) {
      onAddHotel({ name, address, openingTime });
      setName('');
      setAddress('');
      setOpeningTime('');
    }
  };

  return (
    <div>
      <h2>Add Hotel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label>Opening Time:</label>
          <input type="text" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} />
        </div>
        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
