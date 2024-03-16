import { useState , useEffect } from 'react';
import images from '../../image/logogame.png';
import { MdFavorite } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import Login from '../../Pages/Login';
import {
  Link,
} from "react-router-dom";
import 'google-fonts';
import './Header.css';

function Header() {
    const [istextinput , setinput] = useState(false)
     useEffect(() => {
       const ListClick = () => {
        setinput((prev) => !prev);
       };

     const listButton = document.querySelector('.FaListUl');
     if(listButton){
        listButton.addEventListener('click' , ListClick);
     };

     return () =>{
        if(listButton){
            listButton.removeEventListener('click' , ListClick);
         }
     };
    } , [])

  return (
    <>
      <div className="box">
        <div className="text">
        <Link to={'/'}>
        <img src={images} alt="Header Image" />
        </Link>
        <div className={`ele ${istextinput ? 'active' : ''}`}>
        <a href="#">Shooter</a>
        <a href="#">Sports</a>
        <a href="#">Card Game</a>
        <a href="#">Strategy</a>
        <a href="#">Fighting</a>
        </div>
        <div className="icon">
          <Link to={'/Favorite'}>
          <MdFavorite className="MdFavorite"/>
          </Link>
          <FaListUl className="FaListUl" />
          <Link to={'/Login'} className='alogin'>LOG IN</Link>
        </div>
        </div>
        <div className="test">
          <input type="text" placeholder="Type Here..." />
          <button>Search</button>
        </div>
      </div>

    </>
  );
}

export default Header;
