import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    body {
  /* margin: 0;
  font-family:'Jura','Koulen', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${Theme.colors.font};
  line-height: 1.2; */
}


section {
    padding: 100px 0 0;
    background-color: ${Theme.colors.primaryBg};
} 

/* section:nth-of-type(odd) {
    background-color: ${Theme.colors.primaryBg};
}

section:nth-of-type(even) {
    background-color: ${Theme.colors.secondaryBg};
}  */

a {
    text-decoration: none;
    color: ${Theme.colors.font};
    cursor: pointer;
}

ul{
    list-style: none;
}

button{
    /* background-color: unset;
    border: none;
    cursor: pointer;
    color: ${Theme.colors.font}; */

}


h3{
  /* font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.4; */
}

h4, span {
    font-family: 'Roboto', sans-serif;
}

/* p{
    font-size: 14px;
  font-weight: 900;
} */
`

