import React, { useEffect, useState } from "react";
import './List.css';
import axios from "axios";
import heimage from "../../image/game3.png";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';


function List({ handleFavoriteClick }) {
  const [products, setProducts] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const apiurl = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const apiKey = "4b3cc98c6cmsh35a484e0c943ca1p1e78e0jsn1fe9acd4d350";
  const apiplatform = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  

  const fetchData = async () => {
    try {
      const response = await axios.get(apiurl, {
        params: {
          platform: 'browser'
        },
        headers: {
          "X-RapidAPI-Key": apiKey
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPlatformData = async () => {
    try {
      const responses = await fetch(apiplatform, options);
      if (!responses.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await responses.json();
      setPlatforms(data);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchPlatformData();
  }, []);

  const [isDown, setIsDown] = useState(false);

  const openHeight = () => {
    setIsDown((prev) => !prev);
  };
   


  return (
    <>
          <div className="box2">
          <div className="header" id="PC">
            <img src={heimage} alt="" />
            <div className="hename">
              <h1>PRO GAMER</h1>
              <p>PC (Windows)</p>
            </div>
          </div>
          <div className="down">
          <div className={isDown ? 'list active' : 'list'}>
            {platforms.map((product) => (
              <div className="teest" key={product.id}>
                <img src={product.thumbnail} alt="" />
                <div className="text">
                  <h1>{product.title}</h1>
                  <p className='genre'>{product.genre}</p>
                  <Link to={`/Play/${product.id}`}>
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
                      <MdFavorite className='faaav' onClick={() => handleFavoriteClick(product)} />
                    </div>
                  </div>
                </div>
              </div>
             ))}
          </div>
          <div className="downe" onClick={openHeight}>
            <FaAngleDown className={isDown ? 'ngleDown active' : 'ngleDown'}/>
            <FaAngleUp className={isDown ? 'AngleUp' : 'AngleUp active'}/>
          </div>
        </div>
      </div>
      <div className="box2">
          <div className="header"id="Web" >
            <img src={heimage} alt="" />
            <div className="hename">
              <h1>PRO GAMER</h1>
              <p>Web Browser</p>
            </div>
          </div>
          <div className="down">
          <div className={isDown ? 'list active' : 'list'}>
            {products.map((product) => (
              <div className="teest" key={product.id}>
                <img src={product.thumbnail} alt="" />
                <div className="text">
                  <h1>{product.title}</h1>
                  <p className='genre'>{product.genre}</p>
                  <Link to={`/Play/${product.id}`}>
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
                      <MdFavorite className='faaav' onClick={() => handleFavoriteClick(product)} />
                    </div>
                  </div>
                </div>
              </div>
             ))}
          </div>
          <div className="downe" onClick={openHeight}>
            <FaAngleDown className={isDown ? 'ngleDown active' : 'ngleDown'}/>
            <FaAngleUp className={isDown ? 'AngleUp' : 'AngleUp active'}/>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default List;