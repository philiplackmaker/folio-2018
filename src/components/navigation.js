import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


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
            <Link to ="/cambridgeaudio">Cambridge Audio</Link>
          </li>
        </ul>
</Navigation>
);
