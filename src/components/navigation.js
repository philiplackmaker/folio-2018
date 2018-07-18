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
    text-decoration: none;
    display: block;
    font-size: 30px;
    padding: 14px 16px;
    float: left;
`;



export default () => (
 <Navigation>
    <List>
        <ListItems>
            <Link to ="/">Home</Link>
        </ListItems>
        <ListItems>
            <Link to ="/">About</Link>
        </ListItems>
    </List>
</Navigation>
);
