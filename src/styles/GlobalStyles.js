import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    @media (min-width: 700px) {
        font-size: 30px;
    }
    @media (max-width: 350px) {
        font-size: 16px;
    }
}
`;
export default GlobalStyle;
