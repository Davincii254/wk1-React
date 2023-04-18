// This line imports the logo from the logo.svg file
import logo from './logo.svg';

// This line imports the CSS styles from the App.css file
import './App.css';

// This line imports the studentnames and Availablehouses components from the Availablehouses file
import { studentnames, Availablehouses } from './Availablehouses';

// This function defines the App component
function App() {

// This array contains the data for available houses

  let avHouses = [
    {landlord: "Mr Maploti",price: 9000, image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {landlord: "Mr Makumi",price: 5500, image:"https://images.unsplash.com/photo-1568369366985-373beced16ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {landlord: "Mr Zakayo",price: 7000, image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {landlord: "Mr Ayubu",price: 8000, image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {landlord: "Mr Yusufu",price: 19000, image:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
  ]

  // Maping through the map data
  let myList = avHouses.map((house, ind)=>{
    return(
      <Availablehouses myHouse = {house}></Availablehouses>
    )
  })

  

// Render our return
  return (
   <>
   <h1>Niaje Bro, Qaribu Qejani</h1>
   <img width={'70%'} height={'70%'} src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
    {myList}
   </>
  );
}

export default App;





