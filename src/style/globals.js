import { injectGlobal } from 'styled-components';
import * as Colors from './colors';
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
        font-family: 'Sailec-Regular';
        font-size:4rem;
        letter-spacing: .1rem;
        text-align: center;
        padding: 0px;
        margin: 0px;
    }
    h2{
        font-family: 'Sailec-Regular';
        font-size: 2.5rem;
        letter-spacing: .25px;
        text-align: left;
        padding-top: 2rem;
        padding-bottom: 1rem;
        
    }
    

    h3{
        font-family: 'Sailec-Regular';
        font-size: 2rem;
        letter-spacing: .25px;
        text-align: left;
        padding-bottom: 1rem;
        padding-top: 3rem;
        margin: 0px;
    }

    th, h4{
        font-family: 'Sailec-BOLD';
        font-size: 1.rem;
        letter-spacing: .1rem;
        text-align: left;
        margin: 0px;
        text-transform: uppercase;
    }

    tr, p{
    font-family: 'Sailec-Regular';
    text-align: left;
    line-height: 1.75;
    letter-spacing: .15px;
    margin: 0;
    padding-bottom: 1rem;
        ${BreakPoints.SMALL}{
            font-size: 1rem;
        }
        ${BreakPoints.MEDIUM}{
            font-size: 1.5rem;
        }
        ${BreakPoints.LARGE}{
            font-size: 1.5rem;
        }
        ${BreakPoints.XLARGE}{
            font-size: 1.5rem;
        }
        ${BreakPoints.XXLARGE}{
            font-size: 1.5rem;
        }

    }

    hr{
        border: .5px solid ${Colors.MEDIUM_GREY};
    }
   

    td{
        padding-right: 1rem;
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
        font-family: 'Sailec-Regular';
        color: ${Colors.BLACK};
        font-size: 1.5rem;
        letter-spacing: .25px;
        line-height: 50px;
        text-decroation: none;
    }


`;
