import styled from "styled-components"

export const GridContainer = styled.div `
display: grid;
grid-template-columns: repeat(8, auto);
grid-template-rows: repeat(2, auto);
gap: 10px;

div:nth-child(2) {
    display: flex;
    justify-content: center;
    grid-area: 1/2/2/9;
}

footer:last-child {
    display: flex;
    justify-content: center;
    grid-area: 2/1/3/9;
}
`