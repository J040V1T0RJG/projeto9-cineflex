import styled from "styled-components"

export default function Footer ({name, image, timeDate, timeWeekday}) {


    return (
        <>
            <FooterStyle> 
                <div className="flame"><img src={image}></img></div>
                <div className="organizate">
                    <p>{name}</p>
                    <p>{timeWeekday} - {timeDate}</p>
                </div>
            </FooterStyle>     
        </>
    )
}

const FooterStyle = styled.div`
    position: fixed;
    width: 100vw;
    height: 117px;
    bottom: 0px;

    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;

    .flame {
        width: 64px;
        height: 89px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }

    .flame img {
        width: 48px;
        height: 72px;
    }

    .organizate {
        height: 89px;
        margin-left: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;

        color: #293845;
    }


`