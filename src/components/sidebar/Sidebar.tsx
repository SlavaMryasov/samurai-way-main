import styled from "styled-components";
import { SidebarItemsType, SidebarType } from "../../redux/state";
import { Link } from '../../globalStyledComponents/Link';

type SidebarPropsType = {
    collapsed?: boolean
    sidebarItems: SidebarItemsType[]
}

const Sidebar: React.FC<SidebarPropsType> = (props) => {
    if(!props.collapsed){
        return (
            <StyledSidebar>
                <ul>
                {props.sidebarItems.map((item, index)=> <li key={index}><Link>{item.title}</Link></li>)}
                </ul>
                </StyledSidebar>
               
        )
    }else {
        return <div>dd</div>
    }
     
    
}

export default Sidebar;

const StyledSidebar = styled.div `
outline: 1px solid red;
height: 100vh;

ul{
    list-style: none;
}
`

