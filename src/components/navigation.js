import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const Navigation = styled.div`
    width: 100%;
    height: 100px;
    margin: 0 auto;
    display: flex;
`;



const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0; 
`;

const ListItems = styled.li`
    font-family: 'Sailec-Regular';
    display: block;
    font-size: 30px;
    padding: 14px 16px;
    float: left;

`;

const NavigationLink = styled(Link)`
    text-decoration: none;
    transition: all 0.4s ease-in;
    :visited, :active{
        color: red;
        text-underline: none;
    }
    &:hover{
        color: black;
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
            <Link to ="/">About</Link>
        </ListItems>
    </List>
</Navigation>
);
