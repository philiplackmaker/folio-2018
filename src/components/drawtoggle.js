import React from 'react'
import styled from "styled-components";
import * as Spacing from '../style/spacing';
import * as Colors from '../style/colors';




const ToogleButton = styled.button`
    height: ${Spacing.MEDIUM};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    Width: ${Spacing.MEDIUM};
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    :hover {
        ouline: none;
    } 
`;


const ToogleButtonLine = styled.div`
Width: ${Spacing.MEDIUM};
height: 2px;
background: ${Colors.BLACK};
`;

const DrawerToggleButton = props => (
    <ToogleButton onClick={props.click}>
        <ToogleButtonLine></ToogleButtonLine>
        <ToogleButtonLine></ToogleButtonLine>
       <ToogleButtonLine></ToogleButtonLine>
    </ToogleButton>
);

export default DrawerToggleButton

