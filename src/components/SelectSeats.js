import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Footer from "./Footer";

export default function SelectSeats ({setRequiredOrStatusP, requestData, setRequestData}) {
    console.log("requestdataSELECTSEATS", requestData)
    setRequiredOrStatusP("Selecione o(s) assento(s)")
    const params = useParams();
    const [seats, setSeats] = React.useState([]);
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState("")
    const [timeDate, setTimeDate] = React.useState("")
    const [timeWeekday, setTimeWeekday] = React.useState("")


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`);
        promise.then(response => {
            setSeats(...seats, response.data.seats);
            setName(response.data.title)
            setImage(response.data.posterURL)
            console.log("response.data",response.data)
        });
    },[]);

/**/    console.log("seats", seats)



    function SeatInputsBottom () {
        return (
            <>
            <div className="row">
                <div className="colum">
                    <div className="seat green"></div>
                    <p>Selecionado</p>
                </div>
                <div className="colum">
                    <div className="seat"></div>
                    <p>Disponivel</p>
                </div>
                <div className="colum">
                    <div className="seat yellow"></div>
                    <p>Indisponivel</p>
                </div>
            </div>
            <form onSubmit={submitData}>
                <label for="nameField">Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome..." id="nameField"></input>
                <label for="cpfField">CPF do comprador:</label>
                <input type="number" placeholder="Digite o seu CPF..." id="cpfField"></input>
                <button type="submit"><p>Reservar assento(s)</p></button>
            </form>
            
            </>
        )
    }

    function submitData () {

    }



    function RenderSeats (props) {
        setName(`${requestData[0]}`)
        setImage(`${requestData[1]}`)
        setTimeWeekday(`${requestData[2]}`)
        setTimeDate(`${requestData[3]}`)
       

        const [selectColor, setSelectColor] = React.useState(false)

        function motherSelect () {
            selectphase1();
            selectPhase2();
        }

        function selectphase1 () {
            if(!(props.falseOrTrue)) {
                if (!selectColor) {
                    setSelectColor(true)
                }
                else {
                    setSelectColor(false)
                }
            }
            else {
                alert("Esse assento não está disponível")
            }
        }

        function selectPhase2 () {
            if(!(props.falseOrTrue) && !requestData.includes(props.id)) {
                setRequestData([...requestData, props.id])
            }
        }

        return (
            <>
                <div className={`seat ${selectColor ? "green" : ""} ${props.reserved}`} onClick={() => motherSelect()}><p>{props.seatNumber}</p></div>
            </>
        )
    }

    return (
        <>
            <SelectSeatsStyle>
                <div className="seats"> 
                    {seats.map((seat, index) => (
                        <RenderSeats key={index} id={seat.id} seatNumber={seat.name} reserved={!(seat.isAvailable) ? "" : "yellow"} falseOrTrue={seat.isAvailable}/>
                    ))}
                </div>
                    <SeatInputsBottom />
                    <Footer name={name} image={image} timeDate={timeDate} timeWeekday={timeWeekday}/>
                
            </SelectSeatsStyle>
        </>
    )
}

const SelectSeatsStyle = styled.div`
    display: flex;
    flex-direction: column;

    .seats {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 380px;
    }

    .seat {
        width: 26px;
        height: 26px;

        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 18px;
    }

    .seat p {
        height: 28px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;

        color: #4E5A65;
    }

    input {
        width: 327px;
        height: 51px;
        left: 24px;
        top: 497px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-left: 24px;
        margin-bottom: 20px;
    }

    input::placeholder {
        height: 50px;

        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }

    form label {
        margin-left: 24px;
    }

    button {
        width: 225px;
        height: 42px;
        
        border: none;
        background: #E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
        margin-left: 72px;
        margin-bottom: 160px;
    }

    button p {

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #FFFFFF;

    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 16px;
        margin-bottom: 40px;
    }
    
    .colum {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .green {
        background-color: #8DD7CF;
        border: 1px solid #1AAE9E;
    }
    
    .yellow {
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }




`