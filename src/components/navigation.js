import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components";
import * as Colors from '../style/colors';
import '../style/globals';

const Navigation = styled.div`
    width: 100%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0; 

`;

const ListItems = styled.li`
    font-family: 'Sailec-Regular';
    display: block;
    font-size: 1.5rem;
    padding: 14px 16px;
    float: left;
    text-decoration: none;
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


export default () => (
 <Navigation>
    <List>
        <ListItems>
            <NavigationLink to ="/">Home</NavigationLink>
        </ListItems>
        <ListItems>
<<<<<<< HEAD
        <NavigationLink to ="/about">About</NavigationLink>
=======
        <NavigationLink to ="/laterooms">About</NavigationLink>
>>>>>>> production
        </ListItems>
        <ListItems>
        <NavigationLink to ="/thinking">Thinking</NavigationLink>
        </ListItems>
        <ListItems>
        <NavigationLink to ="/">Blog</NavigationLink>
        </ListItems>
    </List>
</Navigation>
);
