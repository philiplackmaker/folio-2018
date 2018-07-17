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


export default () => (
 <Navigation>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/About">About</Link>
          </li>
        </ul>
</Navigation>
);
