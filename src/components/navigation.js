import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import '/Users/philip/development/folio-2018/src/pages/global.css';


const Navigation = styled.div`
    width: 100%;
    height: 100px;
    background-color: red;
    margin: 0 auto;
    display: flex;
`;

const ListItems = styled.li`
    display: block;
    font-size: 30px;
    text-decoration: none;
`;

const List = styled.ul`
    list-style-type: none;

`;

export default () => (
 <Navigation>
        <List>
          <ListItems>
            <Link to ="/">Home</Link>
          </ListItems>
        </List>
</Navigation>
);
