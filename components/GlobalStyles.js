import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    :root {
        --color-background: #FFFFFF;
        --color-foreground: #000000;
        --color-accent: #ABABAB;
        --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        --border-radius: 5px
    }

    * {
        box-sizing: border-box;
        xborder: 1px solid black
    }

    #__next {
        display: grid;
        grid-template-rows: 4rem auto;
        height: 100vh;
        color: var(--color-foreground)
    }

    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    }

    main {
       overflow-y: scroll;
       background-color: var(--color-background);
}
`;

export default GlobalStyles;
