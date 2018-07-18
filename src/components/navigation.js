import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const Navigation = styled.div`
    width: 100%;
    height: 100px;
    margin: 0 auto;
    display: flex;
`;

const ListItems = styled.li`
    display: block;
    font-size: 30px;
`;

const List = styled.ul`
    list-style-type: none;
    font-family: 'Sailec-Regular';
    text-decoration: none;
`;

export default () => (
 <Navigation>
        <List>
          <ListItems>
            <Link to ="/">Home</Link>
            <Link to ="/">About</Link>
            <Link to ="/">Thinking</Link>
            <Link to ="/">Blog</Link>
          </ListItems>
        </List>
</Navigation>
);
