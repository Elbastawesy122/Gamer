import logo from './logo.svg';
import './App.css';
import 'google-fonts';
import Header from './componantes/header/Header';
import Home from './componantes/home/Home';
import Footer from './componantes/footer/Footer';
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Play from './Pages/Play';
import Favorite from './Pages/Favorite';
import { useState } from 'react';


function App() {

  const [ cartitems , setcartitems] = useState([]);

  const handleFavoriteClick = (product) => {
    const productExist = cartitems.find((item) => item === product);
    if (productExist) {
      setcartitems(cartitems.map((item) => (item === product ? { ...productExist } : item)));
    } else {
      setcartitems([...cartitems, { ...productExist }]);
    }
  };
  

  return (
    
     <div className="App">
      <Header/>
      <div className='router'>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='/' element={ <Home/>}/>
          <Route path='play' element={<Play/>}/>
          <Route path='favorite' element={<Favorite cartitems={cartitems} handleFavoriteClick={handleFavoriteClick}/>}/>
        </Routes>
      </div>
      <Footer/>
     </div>
   
  );
}

export default App;

