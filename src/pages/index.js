import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import Navigation from '../components/navigation';
import './fonts.css';
import './global.scss'

const Page = styled.div`
  margin: 0 ;
  padding: 0;
  width: 100%;
  postion: fixed;
`;


const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(10, 10% [col-start]);
  grid-template-rows: 25% 100px auto;
`;

const Header = styled.div`
  grid-column-start: 1;
  grid-column-end: 11;
  height:50vh;
  margin: 0;
`;

const ProjectContainer =styled.div`
grid-column-start: 1;
grid-column-end: 11;
display: flex;
flex-wrap: wrap
`;

// const ProjecctCard = styled(Link)`
// flex-grow: 1;
// min-width: 10%;
// height: 200px;
// box-sizing: border-box;
// margin: 10px;
// background-color:lightgrey;
// transition: all 0.2s ease-in;
// :visited, :active{
//   color: #4644FD;
//   text-underline: none;
// }
// &:hover{
//   background-color: #4644FD;
//   text-underline: none;
// }
// h2{
//   color: white;
// }
// `;


const ProjecctCard = styled(Link)`
flex-grow: 1;
min-width: 10%;
height: 200px;
box-sizing: border-box;
margin: 10px;
background-color:lightgrey;
transition: all 0.2s ease-in;
:visited, :active{
  color: #4644FD;
  text-underline: none;
}
&:hover{
  background-color: #4644FD;
  text-underline: none;
}
h2{
  color: white;
}
`;


export default () => (
   <Page>
    <Navigation>
    </Navigation>
  <Container>
    <Header>
      <h1>
Need to write a really long and wanky statement. So I look better than I am.      
</h1>
    </Header>
    <ProjectContainer>
      <ProjecctCard to ="/audio">
        <h2>
        Cambridge Audio
        </h2>
      </ProjecctCard> 

    </ProjectContainer>
  </Container>
</Page>
);