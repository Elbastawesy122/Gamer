import React from "react";
import games from '../src/../image/game1.jpg';
import { IoIosStar } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import './Play.css'
function Play(){
    return(
        <> 
        <div className="disc">
        <div className="teest">
        <img src={games} alt="" />
        <div className="text">
          <h1>Overwatch 2</h1>
          <p className='genre'>shooter</p>
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
        <div className="pauo">
            <p>A hero-focused first-person team shooter from Blizzard Entertainment.</p>
            <p>PC (Windows)</p>
            <p>publisher: Activision Blizzard</p>
            <p>developer: Blizzard Entertainment</p>
            <p>2022-10-04</p>
            <a href="https://www.freetogame.com/open/overwatch-2">https://www.freetogame.com/open/overwatch-2</a>
        </div>
        </div>
        </>
    )
}
export default Play;