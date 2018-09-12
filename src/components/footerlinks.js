import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components";
import * as Colors from '../style/colors';
import '../style/globals';
import * as Type from '../style/typography';
import { StaticQuery, graphql } from "gatsby"


const FooterLinksText = styled(Link)`
    text-decoration: none;
    ${Type.SMALLBODY};
    transition: all 0.4s ease-in;
    color: ${Colors.BLACK};
    :visited, :active{
        color: ${Colors.BLACK};
        text-underline: none;
    }
    &:hover{
        color: ${Colors.PRIMARY};
        text-underline: none;
    }
`;

const FooterListItems = styled.ul`
list-style-type: none;
padding: 0;
margin: 0;
margin-bottom: 10px;
`;


const FooterLinks = () => (
    <StaticQuery
    query={graphql`
        query {
            allMarkdownRemark(limit: 7 ){
                edges{
                node{
                    frontmatter{
                        title
                        path
                    }
                }
            }
        } 
    }
    `}
    
    render = {data => (
        data.allMarkdownRemark.edges.map(footerlinks =>(
            <FooterListItems>
                <FooterLinksText to= {footerlinks.node.frontmatter.path}>{footerlinks.node.frontmatter.title}</FooterLinksText>
            </FooterListItems>
        ))
    )}
    />
)
   
export default FooterLinks