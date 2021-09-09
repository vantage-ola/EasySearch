import './App.css';
import {useState, useEffect } from 'react';
import InfoList from './components/InfoList'
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
      <header>
        <h1>Quick Info</h1>
      </header>
        <InfoList Info = {Info}/>
    </div>
  );
}

export default App;
