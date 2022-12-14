import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    :root {
        --color-background: #FFFFFF;
        --color-foreground: #000000;
        --color-accent: #ABABAB;
        --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        --border-radius: 5px;
        --background-filter: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.83) 27.34%,
      rgba(0, 0, 0, 0.526172) 42.37%,
      rgba(0, 0, 0, 0.222905) 54.53%,
      rgba(0, 0, 0, 0.01) 70.46%,
      rgba(0, 0, 0, 0) 100%
    );
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        xborder: 1px solid green
    }

    #__next {
        display: grid;
        grid-template-rows: 4rem auto;
        height: 100vh;
        color: var(--color-foreground)
    }

    body {
     
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        max-width: 800px;
        margin: auto;
    }

    main {
       overflow-y: scroll;
       background-color: var(--color-background);
}
`;

export default GlobalStyles;
