import './App.scss';
import SignUpPage from './components/SignUpPage/SignUpPage';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import {useState} from "react";



function App(props) {
  
  const [cardRefSelected, setCardRefSelected] = useState();
  
  console.log(cardRefSelected)
  
  return (
   
    <div className="App">
        
        <Routes>
            <Route path='/' element={<Home setCardRefSelected = {setCardRefSelected}/>} />
            <Route path='/signup' element={<SignUpPage cardRefSelected = {cardRefSelected} />} />
        </Routes>

    </div>);
}

export default App;
