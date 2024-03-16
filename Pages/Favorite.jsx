import React, { useState } from "react";
import './Favorite.css';
import games from '../src/../image/game1.jpg';
import { IoIosStar } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';



function Favorite({cartitems}) {
  const [teestDiv, setTeestDiv] = useState(null);

  return (
    <>
      <div className="Favoritee">
        {cartitems.length === 0 && <div>notheng </div>}

        {cartitems.map((item, index) => (
          <div key={item.id} className="teest">
          <img src={item.games} alt="" />
          <div className="text">
            <h1>Overwatch 2</h1>
            <p className='genre'>shooter</p>
            <Link to={'/Play'}>
            <div className="play">
              <MdKeyboardDoubleArrowLeft className='arrow' />
              <p>PLAY</p> 
              <MdKeyboardDoubleArrowRight className='arrow' />
            </div>
            </Link>
            <div className='icon'>
              <div className="star">
               <IoIosStar className='star'/>
               <IoIosStar className='star'/>
               <IoIosStar className='star'/>
               <IoIosStar className='star'/>
               <IoIosStar className='star'/>
              </div>
              <div className="fav">
              <MdFavorite className='faaav' />
              </div>
            </div>
          </div>
         </div>
        ))}
      </div>
    </>
  );
}

export default Favorite;