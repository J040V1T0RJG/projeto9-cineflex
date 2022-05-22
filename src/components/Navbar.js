import styled from "styled-components";

export default function Navbar () {
    return (
        <>
            <NavbarStyle>
                <p>CINEFLEX</p>
            </NavbarStyle>
        </>
    )
}

const NavbarStyle = styled.div`
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        height: 67px;
    
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        
        color: #E8833A;
        
    }
`;