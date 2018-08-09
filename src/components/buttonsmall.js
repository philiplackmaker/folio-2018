import React from 'react'
import styled from "styled-components";
import * as Colors from '../style/colors';
import * as Type from '../style/typography';
import '../style/globals';
import Arrow from '../images/arrow.svg'

const ButtonSmall = styled.button`
    width: 200px;
    height: 64px;
    border: none;
    background-color: ${Colors.PRIMARY};
    margin-top: 20px;
    padding: 16px;
    cursor: pointer;
    display: flex;
    transition: all 0.2s ease-in;
    :visited, :active{
    border: none;
    }
    &:hover{
    background-color:${Colors.PRIMARY}
    border: none;
}
`;



const ButtonText = styled.text`
    color:${Colors.WHITE}
    ${Type.BODY}
    text-decoration: none;
`;

const ButtonArrow = styled.span`
    background-image: url(${Arrow});
    width: 54px;
    height: 22px;
    background-repeat: no-repeat, repeat;
    background-position: center;
    &:hover{
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        animation
        -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
        transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
`;

export default () => (
     <ButtonSmall>
            <ButtonText>Read more</ButtonText>
            <ButtonArrow></ButtonArrow>
   </ButtonSmall>
   );
   