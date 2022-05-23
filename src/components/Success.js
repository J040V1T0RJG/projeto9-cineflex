import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Success ({setRequiredOrStatusClass, setRequiredOrStatusP, requestData}) {
    setRequiredOrStatusClass("concluded")
    setRequiredOrStatusP("Pedido feito  com sucesso!")
    return (
        <>
        <SuccessStyle>
            <p className="bold">Filme e sessão</p>
            <p>a</p>
            <p>b</p>

            <p className="bold">Ingressos</p>
            <p>a</p>
            <p>b</p>

            <p className="bold">Comprador</p>
            <p>a</p>
            <p>b</p>

            <Link to={"/"}>
                <div className="button"><p>Voltar para Home</p></div>
            </Link>
            

        </SuccessStyle>
        </>
    )
}

const SuccessStyle = styled.div`
    margin-left: 30px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }

    p.bold {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-top: 40px;
    }


`