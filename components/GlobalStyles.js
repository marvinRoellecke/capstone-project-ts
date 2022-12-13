import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    :root {
--color-background: #FFFFFF;
--color-foreground: #000000;
--color-accent: #ABABAB;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: grid;
        grid-template-rows: 4rem auto;
        height: 100vh;
    }

    * {
        box-sizing: border-box;
    
    }

    #__next{
        
    }
`;

export default GlobalStyles;
