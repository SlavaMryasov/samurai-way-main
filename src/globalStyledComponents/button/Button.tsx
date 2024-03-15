
type ButtonPropsType = {
    name: string
    id: string
    onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {

    const onClickHandler = () => {
        props.onClick()
    } 

    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}