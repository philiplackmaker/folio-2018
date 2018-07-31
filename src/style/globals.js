import { injectGlobal } from 'styled-components';
import * as Colors from './colors';


injectGlobal `
    body{
        margin: 0;
    }
    h1{
        font-family: 'Sailec-Regular';
        font-size:4rem;
        letter-spacing: .1rem;
        text-align: center;
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
    p{
        font-family: 'Sailec-Regular';
        font-size: 20px;
    }

`;