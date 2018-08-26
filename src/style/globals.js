import { injectGlobal } from 'styled-components';
import * as Colors from './colors';
import * as Type from '../style/typography';
import * as BreakPoints from '../style/breakpoints';

injectGlobal `
:root{
    font-size: 100%;
    body{
        margin: 0;
        font-size: 1rem;
        }
    }
    html {
        font-size: 100%;
    }
    h1{
        ${Type.LARGEHEADER};
    }
    h2{
       ${Type.SUBHEADER};  
       text-algin: center; 
       padding-top: 4rem;
       padding-bottom: 3rem;
    }
    h3{
        ${Type.LARGEBODY};
        ${BreakPoints.SMALL} {
            padding-top: 2rem;
            padding-bottom: .5rem;                      
        }
        ${BreakPoints.MEDIUM} {  
            padding-top: 2rem;
            padding-bottom: 1.5rem;          
        }
        ${BreakPoints.LARGE}{ 
            padding-top: 3rem;
            padding-bottom: 1.5rem;      
        }
        ${BreakPoints.XLARGE} { 
            padding-top: 4rem;
            padding-bottom: 1.5rem;
        }
        ${BreakPoints.XXLARGE} { 
            padding-top: 4rem;
            padding-bottom: 1..5rem;
        }
    }
    img{
        ${BreakPoints.SMALL} {
            padding-top: 2rem;
            padding-bottom: .5rem;                      
        }
        ${BreakPoints.MEDIUM} {  
            padding-top: 2rem;
            padding-bottom: 1.5rem;          
        }
        ${BreakPoints.LARGE}{ 
            padding-top: 3rem;
            padding-bottom: 3rem;      
        }
        ${BreakPoints.XLARGE} { 
            padding-top: 4rem;
            padding-bottom: 3rem;
        }
        ${BreakPoints.XXLARGE} { 
            padding-top: 1rem;
            padding-bottom: 3rem;
        }
    }    }
    h4{
        ${Type.SMALLHEADER};
        padding-bottom: 2rem;

    }
    th{
        ${Type.SMALLHEADER};
        padding-right: 20px;              
        ${BreakPoints.SMALL} {
            padding-bottom: .25rem;  
            padding-right: 20px;              
        }
        ${BreakPoints.MEDIUM} {  
            padding-bottom: .25rem;
            padding-right: 20px;              

        }
        ${BreakPoints.LARGE}{ 
            padding-bottom: .25rem;
            padding-right:10rem;              

        }
        ${BreakPoints.XLARGE} { 
            padding-bottom: .25rem;
            padding-right:15rem;              

        }
        ${BreakPoints.XXLARGE} { 
            padding-bottom: .5rem;
            padding-right:15rem;              
        }

    }
    tr {
        ${Type.BODY};
        padding-bottom: 1rem;; 
    }
    p{
        ${Type.BODY};
        // padding-bottom: 2rem;

    }
    hr{
        border: .5px solid ${Colors.MEDIUM_GREY};
    }

    th {
        display: table-cell;
        vertical-align: inherit;
        font-weight: bold;
        text-align: left;
    }
     a{
        text-decoration: none;
        color: ${Colors.PRIMARY};
    }
    ol{
     ${Type.BODY};
    }
`;
