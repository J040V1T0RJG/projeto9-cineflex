import { useParams } from "react-router-dom"
import axios from "axios"
import React, { useEffect } from "react"

export default function SelectTime () {
    const params = useParams()
    const [movieTime, setMovieTime] = React.useState([])

    console.log(params)
    console.log("parametros menos 1", params.idFilme - 1)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idFilme - 1}/showtimes`)
        promise.then(response => {
            setMovieTime(...movieTime, response.data)
        });
    },[])
    console.log("movieTme=", movieTime)

    return (
        <>
            <div>selecionando horario</div>
        </>
    )
}