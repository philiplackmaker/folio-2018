import React from 'react'
import styled from "styled-components";
import * as Colors from '../style/colors';
import '../style/globals';
import Arrow from '../images/arrow.svg';
import BlueArrow from '../images/blue_arrow.svg';
import * as BreakPoints from '../style/breakpoints';
import * as Type from '../style/typography';


const ButtonSmall = styled.button`
    border: none;
    cursor: pointer;
    display: flex;
    transition: transform 200ms ease-in-out;
    :visited, :active{
    border: none;
    }
    ${BreakPoints.SMALL} {
        background-color: ${Colors.WHITE};
        &:hover {
            transform: none;
            border: none;
        }
        width: 200px;
        height: 40px;
        padding: 0px;
    }
    ${BreakPoints.MEDIUM} {  
        background-color: ${Colors.PRIMARY};
        &:hover {
            transform: scale(1.1);
            border: none;
        }
        width: 200px;
        height: 64px;
        border: none;
        margin-top: 20px;
        padding: 16px;
    }
    ${BreakPoints.LARGE}{ 
        background-color: ${Colors.PRIMARY};
        &:hover {
            transform: scale(1.1);
            border: none;
        }
        width: 220px;
        height: 74px;
        border: none;
        margin-top: 20px;
        padding: 16px;
    }
    ${BreakPoints.XLARGE} { 
        background-color: ${Colors.PRIMARY};
        &:hover {
            transform: scale(1.1);
            border: none;
        }
        width: 220px;
        height: 74px;
        border: none;
        margin-top: 20px;
        padding: 16px;
    }
    ${BreakPoints.XXLARGE} { 
        background-color: ${Colors.PRIMARY};
        &:hover {
            transform: scale(1.1);
            border: none;
        }
        width: 220px;
        height: 74px;
        border: none;
        margin-top: 20px;
        padding: 16px;
    }
`;

const ButtonText = styled.text`
    color:${Colors.WHITE};
    ${Type.SMALLBODY};
    text-align: left;
    padding: 0;
    margin: 0;
`;

const ButtonArrow = styled.span`
    padding-top: 5px;
    padding-left: 6px;
    width: 56px;
    height: 24px;
    background-repeat: no-repeat, repeat;
    background-position: center;
        ${BreakPoints.SMALL} {
            background-image: url(${BlueArrow});    
            padding-top: 0px;
            padding-left: 0px;
            width: 56px;
            height: 18px;                
        }
        ${BreakPoints.MEDIUM} {  
            background-image: url(${Arrow});  
            padding-top: 5px;
            padding-left: 6px;
            width: 56px;
            height: 24px;       
        }
        ${BreakPoints.LARGE}{ 
            background-image: url(${Arrow}); 
            padding-top: 5px;
            padding-left: 6px;
            width: 56px;
            height: 24px;   
        }
        ${BreakPoints.XLARGE} { 
            background-image: url(${Arrow});
            padding-top: 5px;
            padding-left: 6px;
            width: 56px;
            height: 24px;
        }
        ${BreakPoints.XXLARGE} { 
            background-image: url(${Arrow});
            padding-top: 5px;
            padding-left: 6px;
            width: 56px;
            height: 24px;
        }
    `;

export default () => (
     <ButtonSmall>
            <ButtonText>Read more</ButtonText>
            <ButtonArrow></ButtonArrow>
   </ButtonSmall>
   );
   