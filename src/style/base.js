import * as BreakPoints from '../style/breakpoints';

export const GRID = `
 
               ${BreakPoints.SMALLPHONES} {
                        margin: 0 auto;
                        max-width: 200px;
                        display: grid;
                        grid-template-columns: 40px 50px auto 50px 40px;
                        grid-template-rows: 25% 100px auto;
                        }

                ${BreakPoints.LARGEPHONES} {  
                        margin: 0 auto;
                        max-width: 400px;
                        display: grid;
                        grid-template-columns: 40px 50px auto 50px 40px;
                        grid-template-rows: 25% 100px auto;
                        }

                ${BreakPoints.POTRAITTABLETS}{ 
                        margin: 0 auto;
                        max-width: 500px;
                        display: grid;
                        grid-template-columns: 40px 50px auto 50px 40px;
                        grid-template-rows: 25% 100px auto;

                         }

                ${BreakPoints.TABLETS} { 
                        margin: 0 auto;
                        max-width: 700px;
                        display: grid;
                        grid-template-columns: 40px 50px auto 50px 40px;
                        grid-template-rows: 25% 100px auto;
                        }

                ${BreakPoints.DESKTOP} {
                        margin: 0 auto;
                        max-width: 900px;
                        display: grid;
                        grid-template-columns: 40px 50px auto 50px 40px;
                        grid-template-rows: 25% 100px auto;
                        }
                        
                ${BreakPoints.LARGEDESKTOP} {
                        margin: 0 auto;
                        max-width: 1200px;
                        display: grid;
                        grid-template-columns: 40px 50px auto 50px 40px;
                        grid-template-rows: 25% 100px auto;
                        }

                 ${BreakPoints.EXTRALARGEDESKTOP} {
                                margin: 0 auto;
                                max-width: 1400px;
                                display: grid;
                                grid-template-columns: 40px 50px auto 50px 40px;
                                grid-template-rows: 25% 100px auto;
                                }
        
`;
