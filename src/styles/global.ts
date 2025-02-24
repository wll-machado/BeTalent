import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'Helvetica Neue', sans-serif;
    }

    body{
        background:${(props)=> props.theme.colors["gray-00"]} ;
        -webkit-font-smoothing: antialiased;
    }
`