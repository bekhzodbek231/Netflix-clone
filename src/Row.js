import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Row.css"

function Row({title, fetchUrl, isLargeRow = false}) {

    const [movies, setMovie] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchDate(){
           const request = await axios.get(fetchUrl);
           setMovie(request.data.results)
           return request
        }
        fetchDate();
    },[fetchUrl])

    console.log(movies);

  return (
    <div className='row'>

          <h1>{title}</h1>
        <div className='row__posters'> 
        
        {movies.map((movie) => (
             ((isLargeRow && movie.poster_path )|| 
             (!isLargeRow && movie.backdrop_path ))&& (
              <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name}/>
       
             )
              ))}
            

        </div>   
    </div>
  )
}

export default Row
