import './App.css';
import InfoList from './components/InfoList';
import Simpluix from './img/SIMPLUIX-1.png';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <header>
          <img className="logo" src={Simpluix}/>
      </header>
     <Home/> 
    </div>
  );
}

export default App;
