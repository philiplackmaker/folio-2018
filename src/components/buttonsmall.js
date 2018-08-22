import React from 'react'
import styled from "styled-components";
import * as Colors from '../style/colors';
import * as Type from '../style/typography';
import '../style/globals';
import Arrow from '../images/arrow.svg';
import BlueArrow from '../images/blue_arrow.svg';
import * as BreakPoints from '../style/breakpoints';


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
        width: 200px;
        height: 64px;
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
        width: 200px;
        height: 64px;
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
        width: 200px;
        height: 64px;
        border: none;
        margin-top: 20px;
        padding: 16px;
    }
`;

const ButtonText = styled.text`
    color:${Colors.WHITE}
    ${Type.BODY}
    text-decoration: none;
    ${BreakPoints.SMALL} {
    color:${Colors.PRIMARY}                      
    }
    ${BreakPoints.MEDIUM} {  
        color:${Colors.WHITE}         
    }
    ${BreakPoints.LARGE}{ 
        color:${Colors.WHITE}   
    }
    ${BreakPoints.XLARGE} { 
        color:${Colors.WHITE}
    }
    ${BreakPoints.XXLARGE} { 
        color:${Colors.WHITE}
    }
`;

const ButtonArrow = styled.span`
    width: 54px;
    height: 22px;
    background-repeat: no-repeat, repeat;
    background-position: center;
        ${BreakPoints.SMALL} {
        background-image: url(${BlueArrow});                    
        }
        ${BreakPoints.MEDIUM} {  
            background-image: url(${Arrow});         
        }
        ${BreakPoints.LARGE}{ 
            background-image: url(${Arrow});    
        }
        ${BreakPoints.XLARGE} { 
            background-image: url(${Arrow});
        }
        ${BreakPoints.XXLARGE} { 
            background-image: url(${Arrow});
        }
    `;

export default () => (
     <ButtonSmall>
            <ButtonText>Read more</ButtonText>
            <ButtonArrow></ButtonArrow>
   </ButtonSmall>
   );
   