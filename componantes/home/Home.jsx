import React from "react";
import image from "../../image/game2.png";
import List from "../List/List";
import './Home.css';
import 'google-fonts';


function Home({handleFavoriteClick}){
 return(
    <>
    <div className="home">
      <div className="box1">
        <div className="tel">
          <h1>PRO GAMER</h1>
          <p>play exciting online strategy games, rpgs, and simulations for free</p>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
    <List handleFavoriteClick={handleFavoriteClick} />
    </>
 )
}
export default Home;