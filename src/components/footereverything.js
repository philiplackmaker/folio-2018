import React from "react";
import FooterLinks from '../components/footerlinks';
import styled from "styled-components";
import * as Base from '../style/base';
import  * as Type from '../style/typography';
import { Link } from "gatsby";
import * as Colors from '../style/colors';

const FooterEverythingBox  = styled.div`
${Base.GRID}
padding-top: 3rem;
`;

const FooterContainer = styled.div`
grid-column: 1 / span 3;
display: flex;
justify-content:space-between;
`;

const Blogtext = styled.text`
${Type.BODY};
`;

const FooterProject = styled.div`
`;

const FooterTitles = styled.div`
${Type.SMALLHEADER};
margin-bottom: 10px;
`;

const FooterLinksText = styled(Link)`
    text-decoration: none;
    ${Type.BODY};
    transition: all 0.4s ease-in;
    :visited, :active{
        color: ${Colors.BLACK};
        text-underline: none;
    }
    &:hover{
        color: ${Colors.PRIMARY};
        text-underline: none;
    }
`;

const FooterItems = styled.ul`
list-style-type: none;
padding: 0;
margin: 0;
margin-bottom: 10px;
`;

const FooterEverything = () => (
   <FooterEverythingBox>
       <FooterContainer>
            <FooterProject> 
            <FooterTitles>Project</FooterTitles>
                <FooterLinks></FooterLinks>
            </FooterProject> 
            <FooterProject> 
            <FooterTitles>Latest Blog</FooterTitles>
                <Blogtext> What not to say in facebook interview </Blogtext>
            </FooterProject> 
            <FooterProject> 
                <FooterTitles>Site Map</FooterTitles>
                <FooterItems>
                    <FooterLinksText to ="/">Home</FooterLinksText>
                </FooterItems>
                <FooterItems>
                    <FooterLinksText to ="/about">About</FooterLinksText>
                </FooterItems>
                <FooterItems>
                    <FooterLinksText to ="/thinking">Thinking</FooterLinksText>
                </FooterItems>
                <FooterItems>
                    <FooterLinksText to ="/">Blog</FooterLinksText>
                </FooterItems>       
            </FooterProject> 
            <FooterProject> 
                <FooterTitles>Contact</FooterTitles>
                <FooterItems>
                    <FooterLinksText to ="/">Email</FooterLinksText>
                </FooterItems>
                <FooterItems>
                    <FooterLinksText to ="/">Twitter</FooterLinksText>
                </FooterItems>
                <FooterItems>
                    <FooterLinksText to ="/">Linkedin</FooterLinksText>
                </FooterItems>
                <FooterItems>
                    <FooterLinksText to ="/">Strava</FooterLinksText>
                </FooterItems>       
            </FooterProject> 
        </FooterContainer>
    </FooterEverythingBox>
   );
   
   export default FooterEverything
