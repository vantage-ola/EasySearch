import './App.css';
import {useState, useEffect } from 'react';

function App() {

  const [Info, setInfo] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method': 'GET',
      headers: {
        'Content-Type':'application/json'
      }
      
    })
    .then(resp => resp.json())
    .then(resp => setInfo(resp))
    .catch(error => console.log(error))
  },[])
  return (
    <div className="App">
      <h1>Quick Info</h1>

      {Info.map(info=> {
        return (
          <div key = {info.id}> 
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>
            <h3>{info.address}</h3>
            <h4>{info.phone_no}</h4>
            <h5>{info.url}</h5>
          </div> 

        )
      })}
    </div>
  );
}

export default App;
