import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import './Play.css';
import { useParams } from 'react-router-dom';

function Play({handleFavoriteClick}) {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState(null);
  const apiKey = "4b3cc98c6cmsh35a484e0c943ca1p1e78e0jsn1fe9acd4d350";
  const apiurl = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiurl, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    };

    fetchData();
  }, [id, apiurl, options]);

  return (
    <>
      {product && (
        <div className="disc">
          <div className="teest">
            <img src={product.thumbnail} alt="" />
            <div className="text">
              <h1>{product.title}</h1>
              <p className="genre">{product.genre}</p>
              <div className="icon">
                <div className="star">
                  <IoIosStar className="star" />
                  <IoIosStar className="star" />
                  <IoIosStar className="star" />
                  <IoIosStar className="star" />
                  <IoIosStar className="star" />
                </div>
                <div className="fav">
                  <MdFavorite className="faaav"  onClick={() => handleFavoriteClick(product)} />
                </div>
              </div>
            </div>
          </div>
          <div className="pauo">
            <p>{product.short_description}</p>
            <p>{product.platform}</p>
            <p>publisher: {product.publisher}</p>
            <p>developer: {product.developer}</p>
            <p>{product.release_date}</p>
            <a href={product.game_url}>{product.game_url}</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Play;

