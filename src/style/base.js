import * as BreakPoints from '../style/breakpoints';

export const GRID = `
               ${BreakPoints.SMALL} {
                        margin: 0 auto;
                        max-width: 30em;
                        display: grid;
                        grid-template-columns: repeat(12, [col] 4fr );
                        grid-gap: 1rem;                      
                        }
                ${BreakPoints.MEDIUM} {  
                        margin: 0 auto;
                        max-width: 42em;
                        display: grid;
                        grid-template-columns: repeat(12, [col] 4fr );
                        grid-gap: 1rem;                      
                        }
                ${BreakPoints.LARGE}{ 
                        margin: 0 auto;
                        max-width: 64em;
                        display: grid;
                        grid-template-columns: repeat(12, [col] 4fr );
                        grid-gap: 1rem;                      
                         }
                ${BreakPoints.XLARGE} { 
                        display: grid;
                        max-width: 72em;
                        column-gap: 1rem;
                        row-gap: 1rem;
                        grid-template-columns: repeat(12, [col] 4fr );
                        }
                ${BreakPoints.XXLARGE} { 
                        display: grid;
                        max-width: 86em;
                        column-gap: 1rem;
                        row-gap: 1rem;
                        grid-template-columns: repeat(12, [col] 4fr );
                        }        
`;

