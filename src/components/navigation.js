import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components";
import * as Colors from '../style/colors';
import '../style/globals';
import Headroom from "react-headroom";
import * as BreakPoints from '../style/breakpoints';
import * as Type from '../style/typography';

const NavigationContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background-color: white; 
        ${BreakPoints.SMALL} {
            height: 70px;
            }
        ${BreakPoints.MEDIUM} {  
            height: 100px;   
            }
        ${BreakPoints.LARGE}{ 
            height: 100px;
            }
        ${BreakPoints.XLARGE} { 
            height: 100px;
            }
        ${BreakPoints.XXLARGE} { 
            height: 100px;
            }
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0; 
`;

const ListItems = styled.li`
    display: block;
    float: left;
    text-decoration: none;
        ${BreakPoints.SMALL} {
            ${Type.BODY};            
            padding: 1rem 1rem;                                
        }
        ${BreakPoints.MEDIUM} {  
            ${Type.BODY};
            padding: 1rem 1rem;         
        }
        ${BreakPoints.LARGE}{ 
            ${Type.BODY};
            padding: 1rem 1rem;        
        }
        ${BreakPoints.XLARGE} { 
            ${Type.BODY};
            padding: 1rem 1rem;
        }
        ${BreakPoints.XXLARGE} { 
         }
`;

const NavigationLink = styled(Link)`
    text-decoration: none;
    transition: all 0.4s ease-in;
    color: black;
    :visited, :active{
        color: ${Colors.BLACK};
        text-underline: none;
    }
    &:hover{
        color: ${Colors.PRIMARY};
        text-underline: none;
    }
`;

const Navigation = () => (
<Headroom style={{
                webkitTransition: 'all .5s ease-in-out',
                mozTransition: 'all .5s ease-in-out',
                oTransition: 'all .5s ease-in-out',
                transition: 'all .5s ease-in-out',
                }}>     
<NavigationContainer>
    <List>
        <ListItems>
            <NavigationLink to ="/">Home</NavigationLink>
        </ListItems>
        <ListItems>
        <NavigationLink to ="/about">About</NavigationLink>
        </ListItems>
        <ListItems>
        <NavigationLink to ="/thinking">Thinking</NavigationLink>
        </ListItems>
        <ListItems>
        <NavigationLink to ="/blog">Blog</NavigationLink>
        </ListItems>
    </List>
    </NavigationContainer>
</Headroom>
);

export default Navigation