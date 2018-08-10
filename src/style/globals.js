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
        font-family: 'Sailec-BOLD';
        color: ${Colors.BLACK};
        font-size: 3rem;
        text-transform: uppercase;
        text-decroation: none;

    }
    h3{
        font-family: 'Sailec-Regular';
        color: ${Colors.BLACK};
        font-size: 2rem;
        text-decroation: none;
    }

    h6{
        font-family: 'Sailec-Regular';
        color: ${Colors.BLACK};
        font-size: 1rem;
        text-decroation: none;
        padding: 0px;
        margin: 0px;
    }
    p{
        font-family: 'Sailec-Regular';
        font-size: 2rem;
    }
    a{
        text-decoration: none;
        color: ${Colors.BLACK};
    }

    ol{
        font-family: 'Sailec-Regular';
        color: ${Colors.BLACK};
        font-size: 1.5rem;
        letter-spacing: .05rem;

        text-decroation: none;
    }
`;