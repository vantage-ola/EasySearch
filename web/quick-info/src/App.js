import './App.css';
import Home from './components/Home';

import { HomeStyle } from './HomeStyle';

import Header from './components/Header';


function App() {

  return (
    <div className="App">
      
      <Header/>
      <HomeStyle/>
     <Home/> 
  </div>

  );
}

export default App;
