import styled from "styled-components"

type ContainerPropsType = {
    padding?: string,
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1470px;
    width: 100%;
    height: 100%;
    padding: ${props => props.padding};
    margin: 0 auto;
    outline: 1px solid green;

`