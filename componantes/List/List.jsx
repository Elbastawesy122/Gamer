import React, { useEffect, useState } from "react";
import './List.css';
import Lists from './Lists';

function List() {
  // const [prodect, setProdect] = useState([]);
  // const apiurl = "https://www.freetogame.com/api/games";

  // useEffect(() => {
  //   fetch(apiurl)
  //     .then((res) => res.json())
  //     .then((data) => setProdect(data.results));
  // }, []);
//   useEffect(() => {
//     fetch(apiurl, { mode: 'no-cors' })
//       .then((res) => res.json())
//       .then((data) => setProdect(data.results))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
  
  
//   const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   next();
// });

// // المزيد من إعدادات الخادم...

// app.listen(YourPort, () => {
//   console.log(`Server is running on port ${YourPort}`);
// });

  

  return (
    <>
      <div className="box2">
    
         
            <Lists  />
    
      </div>
    </>
  );
}

export default List;