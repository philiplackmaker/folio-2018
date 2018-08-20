import { injectGlobal } from 'styled-components';
import * as Colors from './colors';


injectGlobal `
    body{
        margin: 0;
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
        padding-top: 20px;
        padding-bottom: 10px;
        
    }
    

    h3{
        font-family: 'Sailec-Regular';
        font-size: 2rem;
        letter-spacing: .25px;
        text-align: left;
        padding-bottom: 10px;
        padding-top: 50px;
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
    font-size: 1.5rem;
    text-align: left;
    line-height: 1.75;
    letter-spacing: .15px;
    margin: 0;
    padding-bottom: 20px;n
    }

    hr{
        border: .5px solid ${Colors.MEDIUM_GREY};
    }
   

    td{
        padding-right:50px
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
