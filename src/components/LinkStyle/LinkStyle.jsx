import styled from "styled-components";
import { Link } from "react-router-dom";


const LinkStyle = styled(Link)`
    &:visited,
    &:link {
        text-decoration: none;
        color: inherit;
        padding-top: 20px ;
        padding-bottom: 20px;

    }
`

export default function LinkStyleComponent  (props)  {
    
    return (
        <LinkStyle to = {props.to}>{props.children}</LinkStyle>
    )

}
