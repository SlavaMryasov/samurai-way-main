import { Theme } from "./Theme"

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: FontPropsType) => `
    font-family: ${family || "Roboto"};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 430px)/(1920 - 430) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`