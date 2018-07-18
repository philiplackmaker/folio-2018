import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const Navigation = styled.div`
    width: 100%;
    height: 100px;
    background-color: Black;
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
            <Link to ="/">About</Link>
            <Link to ="/">Thinking</Link>
            <Link to ="/">Blog</Link>
          </ListItems>
        </List>
</Navigation>
);
