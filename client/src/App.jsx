import './App.css';
import  {useState, useEffect} from 'react';
import SightCard from './components/sightCard';

 
function App() {


  const [sightings, setSightings] = useState(false);
 
  

    const getSighting = () => {
      fetch("http://localhost:8080/api/animalsightings")
      .then((response) => response.json())
      .then(sightings => {
        setSightings(sightings); 
        console.log('Sighting fetched...', sightings);
        });
    }

    useEffect(() => {getSighting()}, []);

   


  return (
    <div className="App">
         <h1>Animal Sighting Tracker</h1>
      
       
        <SightCard key={sightings.id} location={sightings.location} nickname={sightings.nickname}/>
        
        
      
      
      

     
  </div>

  );
  
  
}



export default App


