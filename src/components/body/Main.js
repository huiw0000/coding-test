import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Main(prop) {
    const [items, setItems] = useState([]);
    const API_KEY = '6a994efb88ffee590cab460538cb62e1';
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    const modifyKeyword = (prop)=>{
        if(prop.length > 0)
            return prop
        return " "
    }

    const setWatchedMovieId = (id)=>{
        if(document.cookie.includes("id")){
            document.cookie = "id=" + document.cookie.split("id=")[1].split(";")[0] + " " + id
        }else{
            document.cookie = "id=" + id
        }
    }

    const movieWatched = ()=>{
        if(document.cookie.includes("id")){
            return document.cookie.split("id=")[1].split(" ")
        }
        return [""]
    }

    return (
        <div className='row'>
            {items.results && items.results.map((e, i) => {
                return (
                    e.title.toLowerCase().indexOf(modifyKeyword(prop.keyword.toLowerCase()))>-1 
                    || e.overview.toLowerCase().indexOf(modifyKeyword(prop.keyword.toLowerCase()))>-1 ?
                        <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                            <div className="movie-box-3 mb30">
                                <div className="listing-container">
                                    <div className="listing-image">
                                        <img src={"https://image.tmdb.org/t/p/original" + e.poster_path} alt="" />
                                    </div>
                                    <div className="listing-content">
                                        <div className="inner">
                                            <div className="play-btn">
                                                <a href="#" className="play-video" onClick={() => setWatchedMovieId(e.id)}>
                                                    <FontAwesomeIcon icon={faPlay} />
                                                </a>
                                            </div>
                                            <h2 className="title">{e.title}</h2>
                                            <div className="stars">
                                                <div className="rating">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span>{Math.floor(e.vote_average * 10) / 10 + "/10"}</span>
                                                    <span className="category">{
                                                        movieWatched().filter(movieId => {
                                                            return movieId==e.id
                                                        }).length > 0 ? "Watched" : ""
                                                    }</span>
                                                </div>
                                            </div>
                                            <p>{e.overview}</p>
                                            <a href="#" className="btn btn-main btn-effect">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>: ""
                )
            })}
        </div>
    )
}