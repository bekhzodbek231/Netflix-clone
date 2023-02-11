import React from 'react'
import "./Banner.css"
import {useState, useEffect} from "react"
import axios from './axios';
import requests from "./Requests"

function Banner() {
const [movie, setMovie] = useState([]);
    


    useEffect(() =>{
        async function fetchDate(){
            const request = await axios.get(requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request
        }
        fetchDate();
    },[])

    console.log(movie);

const trancate = (string, n) => {
      return string?.length > n ? string.substring(0, n - 1) + " ..." : string;
}

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center, center"
    }}> 

    <div className="banner__contents">
        <div className="banner__title">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className="banner__buttons">
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h1 className="banner__description">
            {trancate(
                `${movie?.overview}`,200
            )}
        </h1>
    </div>

    <div className='banner--fadeBottom'/>
           
    </header>
  )
}

export default Banner
