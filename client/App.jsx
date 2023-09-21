import './App.css';
import React, {useState, useEffect} from 'react';


// if create event is clicked, it will redirect to the create event page, SET UP CORRECTLY? DO THE SAME FOR EDIT AND DELETE?
function App() {


  const [sightings, setSightings] = useState(false);
  //const [createEvent, setCreateEvent] = useState(false);
  

    const getSighting = () => {
      fetch("http://localhost:8080/api/animalsightings")
      .then((response) => response.json())
      .then(sightings => {
        setSightings(sightings); 
        console.log('Sighting fetched...', sightings);
        });
    }

    useEffect(() => {getSighting()}, []);

    fetch("http://localhost:8080/api/animalsightings", { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id , nickname, location }),
      })
      .then(response => {
        return response.text();
      })
    
      .then(sightings => {
        alert(sightings);
        getSighting();
      });
  




  return (
    <div className="App">
      
    <h1>Animal Sighting Tracker</h1>
      
    <button className='btn' >Add New Event</button>
    <br />
    <button  className='btn' onClick={DeleteEvent}>Delete Event</button>
     
  </div>

  );
  
  
};

export default App



// return (
//     <div className="App">
      
//     <h1>Animal Sighting Tracker</h1>
//      {sortedEvents?.map((event)=>  <ModEvents key={event.id} event={event}  />)}
//     {events? <Events events={events}   /> : <h2>Loading...</h2>}
//     <button className='btn' onClick={() =>setCreateEvent(true)}>Add New Event</button>
//     <br />
//     <button  className='btn' onClick={DeleteEvent}>Delete Event</button>
//      <TickIcon />
//      {CreateEvents &&<CreateEvents setCreateEvent={setCreateEvent} />}
//      <FormEvent/>
//   </div>