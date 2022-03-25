import React from 'react'
import { ButtonM, DivContenedor } from '../styled/StyledComponents'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Vitrina = () => {
    const Div = styled.div`
    
    background-image: url('https://static.eldiario.es/clip/397f6e34-93b0-40da-be39-00b2abc20e1e_16-9-discover-aspect-ratio_default_0.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    position:relative;
    z-index:1;

    &::after {
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.575);
    z-index:-1;
}
    `

    return (
        <Div>
            <DivContenedor>
                <h1>Tenemos prendas para las consentidas de la casa.
                    Observa nuestros productos, <br></br><br></br>Te encantarán..!</h1>

                    <ButtonM><Link to='/ropa' className='nav-link'>Vitrina</Link></ButtonM>
            </DivContenedor>
        </Div>
    )
}

export default Vitrina