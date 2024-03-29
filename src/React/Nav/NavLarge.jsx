import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav/>
            NavLarge
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`
    display: flex;
    justify-content: center;
    background-color: green;
    padding: 20px;



    .Nav {
        display: flex;
        width: 500px;    
    }

    a {
        flex: 1;
        text-align:center;
        display: block;
        background: teal;
        color: white;
        text-decoration: none;

        padding: 10px;
        margin: 10px 5px;

        &.active{
            background-color: orange
        }
        &:hover {
            background-color: #02aca9;
            color: teal;
        }
    }
`;