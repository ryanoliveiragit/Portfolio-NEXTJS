import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #FFFFFF;
    --Light-colour: #F5F5F5;
    --Low-priority: #848191;
    --Primary-colour: #7562E0;
    --Secondary-colour: #181824;
    --Dark-colour: #020220;
    --bg-colour: #1A1A29;
}
    * {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        font-family: 'Roboto' sans-serif;
    }
    body {
        background-color: var(--bg-colour);
        color: white;
    }
`