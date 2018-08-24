import { injectGlobal } from 'styled-components';
import * as Colors from './colors';
import * as Type from '../style/typography';

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
    }
    h3{
        ${Type.LARGEBODY};
        padding-bottom: 2rem;
    }
    h4{
        ${Type.SMALLHEADER};
        padding-bottom: 2rem;

    }
    th{
        ${Type.SMALLHEADER};
        padding-bottom: 2rem;

    }
    tr {
        ${Type.BODY};
        padding-bottom: 2rem;; 
    }
    p{
        ${Type.BODY};
        padding-bottom: 2rem;

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
     ${Type.BODY};
    }
`;
