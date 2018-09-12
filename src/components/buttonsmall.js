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
    transition: transform 200ms ease-in-out;
    :visited, :active{
    border: none;
    }
    &:hover {
        transform: scale(1.1);
        border: none;

      }
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
`;

export default () => (
     <ButtonSmall>
            <ButtonText>Read more</ButtonText>
            <ButtonArrow></ButtonArrow>
   </ButtonSmall>
   );
   