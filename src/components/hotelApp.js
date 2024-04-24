import React, { useState } from 'react';
import AddHotelForm from '././addNewHotel';
import HotelList from '././hotelList';
import SearchHotel from './searchHotel';

const initialHotels = [
    { name: 'Makadem Hotel', address: 'Tom Mboya Statue, Nairobi', openingTime: '08:00 AM' },
    { name: 'Daudi Kabaka Lodge', address: 'Jeevanjee Gardens, Nairobi', openingTime: '09:00 AM' },
    { name: 'Makari Hotel', address: 'Nairobi National Museum, Nairobi', openingTime: '07:30 AM' },
    { name: 'Fundikira Resort', address: 'Bomas of Kenya, Nairobi', openingTime: '08:30 AM' },
    { name: 'Fadhili Grand Hotel', address: 'Kenyatta International Conference Centre (KICC), Nairobi', openingTime: '07:00 AM' },
    { name: 'Makonde Inn', address: 'Uhuru Gardens, Nairobi', openingTime: '07:45 AM' },
    { name: 'Njeri Grand Hotel', address: 'Karen Blixen Museum, Nairobi', openingTime: '08:15 AM' },
    { name: 'Makinya Hotel', address: 'Giraffe Centre, Nairobi', openingTime: '09:30 AM' },
    { name: 'Equator Resort', address: 'Ol Pejeta Conservancy, Nanyuki', openingTime: '10:00 AM' },
    { name: 'Mugithi Inn', address: 'Thika Road Mall (TRM), Nairobi', openingTime: '08:45 AM' },
    { name: 'Kamaru Lodge', address: 'Karatina University, Karatina', openingTime: '08:20 AM' }
  ];
  

const HotelApp = () => {
  // State for managing the list of hotels
  const [hotels, setHotels] = useState(initialHotels);

  // Function to add a new hotel to the list
  const addHotel = (newHotel) => {
    setHotels([...hotels, newHotel]);
  };

  return (
    <div>
      <h1>Hotel Management System</h1>
      {/* Form to add a new hotel */}
      <AddHotelForm onAddHotel={addHotel} />
      {/* Component to search for hotels */}
      <SearchHotel hotels={hotels} />
      {/* Component to display the list of hotels */}
      <HotelList hotels={hotels} />
    </div>
  );
};

export default HotelApp;
