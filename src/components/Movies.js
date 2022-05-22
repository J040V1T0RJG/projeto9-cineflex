import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";


export default function Movies () {
    const [movies, setMovies] = React.useState([]);
    const params = useParams();
    console.log("parametros", params);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then(response => {
            setMovies(...movies, response.data)
        });
    }, [])     
    console.log(movies)

    

    function test (index) {
        console.log("testei", index)
    }

    function RenderMovies (props) {
        return (
            <>
                <img src={props.image} onClick={props.click} ></img>
            </>
        )
    }

   
    
    
    
    
    
    return (
        <>
            <MoviesStyle>
                <div className="organizate">
                    {movies.map( (movie, index) => (
                         console.log("movie.id", movie.id),
                         console.log("index", index),
                        <Link to={`sessoes/${movie.id}`}> 
                            <RenderMovies key={index} image={movies[index].posterURL} click={() => test(index)}/>
                           
                        </Link>
                        
                        
                    ))}
                </div>
            </MoviesStyle>
        </>
    )
}

const MoviesStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .organizate {
        width: 260px;
    }
    
    img {
        width: 129px;
        height: 193px;

        cursor: pointer;
    }
`