import React from "react";
import FooterLinks from '../components/footerlinks';
import styled from "styled-components";
import * as Base from '../style/base';
import  * as Type from '../style/typography';
import { Link } from "gatsby";
import * as Colors from '../style/colors';
import * as BreakPoints from '../style/breakpoints';


const FooterBackground = styled.div`
    width: 100%;
    background-color: ${Colors.LIGHT_GREY};
    margin-top: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const FooterEverythingBox  = styled.div`
${Base.GRID}
`;

const Blogtext = styled.text`
${Type.SMALLBODY};
`;

const FooterProject = styled.div`
    ${BreakPoints.SMALL} {
        grid-column: 2 / span 10;                            
    }
    ${BreakPoints.MEDIUM} {  
        grid-column: 1 / span 2;        
    }
    ${BreakPoints.LARGE}{ 
        grid-column: 1 / span 2;    
    }
    ${BreakPoints.XLARGE} { 
        grid-column: 1 / span 2;
    }
    ${BreakPoints.XXLARGE} { 
        grid-column: 1 / span 2;    
    }
`;

const FooterBlog = styled.div`
    ${BreakPoints.SMALL} {
        grid-column: 2 / span 10;                            
    }
    ${BreakPoints.MEDIUM} {  
        grid-column: 4 / span 3;
    }
    ${BreakPoints.LARGE}{ 
        grid-column: 4 / span 3;
    }
    ${BreakPoints.XLARGE} { 
        grid-column: 4 / span 3;
    }
    ${BreakPoints.XXLARGE} { 
        grid-column: 4 / span 3;
    }
`;

const FooterSite = styled.div`
    ${BreakPoints.SMALL} {
        grid-column: 2 / span 10;                            
    }
    ${BreakPoints.MEDIUM} {  
        grid-column: 8  / span 2;
    }
    ${BreakPoints.LARGE}{ 
        grid-column: 8  / span 2;
    }
    ${BreakPoints.XLARGE} { 
        grid-column: 8  / span 2;
    }
    ${BreakPoints.XXLARGE} { 
        grid-column: 8  / span 2;
    }
`;

const FooterContact = styled.div`
    ${BreakPoints.SMALL} {
        grid-column: 2 / span 10;                            
    }
    ${BreakPoints.MEDIUM} {  
        grid-column: 10  / span 2;
    }
    ${BreakPoints.LARGE}{ 
        grid-column: 10  / span 2;
    }
    ${BreakPoints.XLARGE} { 
        grid-column: 10  / span 2;
    }
    ${BreakPoints.XXLARGE} { 
        grid-column: 10  / span 2;

    }
`;

const FooterTitles = styled.div`
${Type.SMALLHEADER};
margin-bottom: 1rem;
`;

const FooterLinksText = styled(Link)`
    text-decoration: none;
    ${Type.SMALLBODY};
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
    <FooterBackground>
   <FooterEverythingBox>
            <FooterProject> 
            <FooterTitles>Project</FooterTitles>
                <FooterLinks></FooterLinks>
            </FooterProject> 
            <FooterBlog> 
            <FooterTitles>Latest Blog</FooterTitles>
                <Blogtext> What not to say in facebook interview </Blogtext>
            </FooterBlog> 
            <FooterSite> 
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
                    <FooterLinksText to ="/blog">Blog</FooterLinksText>
                </FooterItems>       
            </FooterSite> 
            <FooterContact> 
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
            </FooterContact> 
    </FooterEverythingBox>
    </FooterBackground>
   );
   
   export default FooterEverything
