import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";


export default function Movies () {
    const [movies, setMovies] = React.useState([]);

/*
    let abc = {
        primeiro: "aaa",
        segund0: "bbb"
    }
    const [acd, setAcd] = React.useState(["hello word"]) 
    console.log(acd)

    

  console.log(acd[1]?.primeiro)
        setAcd([...acd, abc])

*/

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
  
        promise.then(response => {
            setMovies(...movies, response.data)
        });
    }, [])     

    function RenderMovies (props) {
        return (
            <>
                <div className="flame">
                    <img src={props.image} onClick={props.click} ></img>
                </div>
                
            </>
        )
    }
    
    return (
        <>
            <MoviesStyle>
                <div className="organizate">
                    {movies.map( (movie, index) => (
                        <Link to={`sessoes/${movie.id}`}> 
                            <RenderMovies key={index} image={movies[index].posterURL}/>
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

    .flame{
        width: 145px;
        height: 209px;

        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px; 

        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 10px;
    }

    .organizate {
        width: 360px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
    
    img {
        width: 129px;
        height: 193px;

        cursor: pointer;
    }
`