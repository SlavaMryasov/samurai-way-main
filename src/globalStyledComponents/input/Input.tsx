import { RefObject } from "react"

type InputPropsType = {
    inputRef:RefObject<HTMLInputElement>
}

export const Input: React.FC<InputPropsType> = (props)=> {
    return(
        <input ref={props.inputRef}/>
    )
}