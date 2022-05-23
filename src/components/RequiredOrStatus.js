import styled from "styled-components"

export default function RequiredOrStatus ({requiredOrStatusP, requiredOrStatusClass}) {
    return (
        <>
            <RequiredOrStatusStyle>
                <p className={requiredOrStatusClass}>{requiredOrStatusP}</p>
            </RequiredOrStatusStyle>
        </>
        
    )
}

const RequiredOrStatusStyle = styled.div`

    width: 100vw;
    height: 100px;
    background-color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    p.normal {
        height: 110px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #293845;
    }

    p.concluded {
        height: 110px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #247A6B;
    }
`;