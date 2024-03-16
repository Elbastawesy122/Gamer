import React from 'react';
import { useState } from "react";
import games from '../../image/game1.jpg';
import { IoIosStar } from "react-icons/io";
import heimage from "../../image/game3.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Lists.css';

function Lists( {handleFavoriteClick} ) {
  const [isdown, setIsdown] = useState(false);

const openheight = () => {
  setIsdown((prev) => !prev);
};
  
  return (
    <>
      <div className="header">
        <img src={heimage} alt="" />
        <div className="hename">
          <h1>PRO GAMER</h1>
          <p>All Games</p>
        </div>
      </div>
      <div className="down">
      <div className={isdown ? 'list active' : 'list'}>
       <div className="teest">
        <img src={games} alt="" />
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
            <MdFavorite className='faaav' onClick={handleFavoriteClick} />
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
      </div>  
      <div className="downe" onClick={openheight}>
      <FaAngleDown className={isdown ? 'ngleDown active' : 'ngleDown'}/>
      <FaAngleUp className={isdown ? 'AngleUp' : 'AngleUp active'}/>
      </div>
      </div>
      <div className="header">
        <img src={heimage} alt="" />
        <div className="hename">
          <h1>PRO GAMER</h1>
          <p>Pc Games</p>
        </div>
      </div>
      <div className='list'>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
      </div>  
      <div className="header">
        <img src={heimage} alt="" />
        <div className="hename">
          <h1>PRO GAMER</h1>
          <p>Web Browser</p>
        </div>
      </div>
      <div className='list'>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
       <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
          <div className="play">
            <MdKeyboardDoubleArrowLeft className='arrow' />
            <p>PLAY</p>
            <MdKeyboardDoubleArrowRight className='arrow' />
          </div>
          <div className='icon'>
            <div className="star">
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
             <IoIosStar className='star'/>
            </div>
            <div className="fav">
            <MdFavorite className='faaav'/>
            </div>
          </div>
        </div>
       </div>
      </div>  
    </>
  );
}

export default Lists;