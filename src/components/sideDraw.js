import React from 'react'
import styled from "styled-components";
import * as Colors from '../style/colors';
import { Link } from "gatsby"
import * as BreakPoints from '../style/breakpoints';
import * as Type from '../style/typography';


const OverlayNavigationLink = styled(Link)`
    text-decoration: none;
    transition: all 0.4s ease-in;
    :visited, :active{
        color: ${Colors.WHITE};
        text-underline: none;
    }
    &:hover{
        color: ${Colors.PRIMARY};
        text-underline: none;
    }
`;


const OverlayContainer = styled.div`
    width: 100%;
    height: 100vh;
    top: 0; 
    left: 0;
    display: flex;
    postion: fixed;
    align-items: center;
    background-color: ${Colors.BLACK}; 
    z-index: -1;
    ${BreakPoints.SMALL} {
        }
    ${BreakPoints.MEDIUM} {  
        display: none
     }
`;

const OverlayList = styled.ul`
    OverlayList-style-type: none;
    padding: 0;
    margin: 0; 
`;

const OverlayListItems = styled.li`
    text-decoration: none;
        ${BreakPoints.SMALL} {
            ${Type.LARGEHEADER};            
            padding: 1rem 1rem;                                
        }
       
`;



const SideDraw = props => (
    <OverlayContainer>
            <OverlayList>
                <OverlayListItems>
                    <OverlayNavigationLink to ="/">Home</OverlayNavigationLink>
                </OverlayListItems>
                <OverlayListItems>
                    <OverlayNavigationLink to ="/about">About</OverlayNavigationLink>
                </OverlayListItems>
                <OverlayListItems>
                    <OverlayNavigationLink to ="/thinking">Thinking</OverlayNavigationLink>
                </OverlayListItems>
                <OverlayListItems>
                    <OverlayNavigationLink to ="/blog">Blog</OverlayNavigationLink>
                </OverlayListItems>
            </OverlayList>
    </OverlayContainer>
);

export default SideDraw;
