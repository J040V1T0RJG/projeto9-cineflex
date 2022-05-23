import { useParams, Link } from "react-router-dom"
import axios from "axios"
import React, { useEffect } from "react"
import styled from "styled-components"
import Footer from "./Footer"


export default function SelectTime ({setRequiredOrStatusP, setRequestData, requestData}) {
    setRequiredOrStatusP("Selecione o horário")
    const params = useParams()
    const [movieTimes, setMovieTimes] = React.useState([]);
    const [dataMovies, setDataMovies] = React.useState([]);
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState("")

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idFilme}/showtimes`)
        promise.then(response => {
            setMovieTimes(...movieTimes, response.data.days)
            setDataMovies(...dataMovies, response.data)
            setName(response.data.title)
            setImage(response.data.posterURL)
            setRequestData([...requestData, response.data.title, response.data.posterURL])
        });
    },[])

    function RenderTimes (props) {
        function saveDataFirst () {
            setRequestData([...requestData, props.weekday, props.firstSession])
        }
        function saveDataSecond () {
            setRequestData([...requestData, props.weekday, props.secondSession])
        }

        return (
            <>
                <p>{props.weekday} - {props.date}</p>
                <div className="organizate">
                    <Link to={`/assentos/${props.paramsId0}`}>
                        <div className="button" onClick={() => saveDataFirst()}><p>{props.firstSession}</p></div>
                    </Link>
                    <Link to={`/assentos/${props.paramsId1}`}>
                        <div className="button" onClick={() => saveDataSecond()}><p>{props.secondSession}</p></div>    
                    </Link>   
                </div>
            </>
        )
    }

    return (
        <>
            <SelectTimeStyle>
                <div>
                    {movieTimes.map( (time, index) => (
                        <RenderTimes 
                            weekday={time.weekday} 
                            date={time.date} 
                            firstSession={time.showtimes[0].name} 
                            secondSession={time.showtimes[1].name}
                            paramsId0={time.showtimes[0].id}
                            paramsId1={time.showtimes[1].id}
                        />   
                    ))}
                </div>
            </SelectTimeStyle>
            <Footer name={name} image={image}/>
        </>
    )
}

const SelectTimeStyle = styled.div`
    display: flex;

    p {
        height: 35px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        margin-left: 24px;

        color: #293845;
    }
    .organizate {
        display: flex;
        margin-left: 24px;
        margin-top: 22px;
        margin-bottom: 22px;
    }
    .button {
        width: 83px;
        height: 43px;

        background-color: #E8833A;
        border-radius: 3px;
        margin-right: 10px;
    }

    .button p{
        height: 43px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;

        color: #FFFFFF;
    }

`
