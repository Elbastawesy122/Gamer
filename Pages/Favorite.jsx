// في مكون Favorite
import React, { useState } from "react";
import './Favorite.css';
import games from '../src/../image/game1.jpg';
import { IoIosStar } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Favorite({ cartitems }) {
  const FaHeartBrokenClick = () => {
    document.querySelector('.faaav').parentElement.parentElement.parentElement.parentElement.remove();
  }
  return (
    <>
      <div className="Favoritee">
        {cartitems.length === 0 && <div className="nothing ">Nothing</div>}

        <div className="down">
        {cartitems.map((item, index) => (
          <div key={index} className="teest">
            <img src={item.thumbnail} alt="" />
            <div className="text">
              <h1>{item.title}</h1>
              <p className='genre'>{item.genre}</p>
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
                  <FaHeartBroken className='faaav' onClick={FaHeartBrokenClick}/>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default Favorite;
