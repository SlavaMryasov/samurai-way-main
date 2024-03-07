import styled from "styled-components";
import { Theme } from "../styles/Theme";

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    padding?: string,
    height?: string,
    gap?: string,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    width: 100%;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    padding: ${props => props.padding || 0};
    height: ${props => props.height || "100%"};
    gap: ${props => props.gap || "0"};
    position: relative;

/* @media screen and (max-width: 940px){
    flex-direction: ${props => props.direction|| "column"};
    justify-content: center;
    align-items: flex-start;
} */
`