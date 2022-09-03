import styled from 'styled-components'

const ButtonStyle = styled.button`
    position: ${props => props.position};
    background-color: ${props => props.bgColor} ;
    font-family: 'Kumbh Sans';
    margin-bottom: ${props => props.marginBottom };
    color: ${props => props.fontColor};
    font-weight : 700;
    width:  ${props => props.width ? "100%" : "171px"} ; 
    height: 56px;
    border: none;
    border-radius: 28px;
    cursor: pointer;
    line-height: 28px;
    box-shadow :   ${props => props.boxShadow ? "0px 25px 25px -10px rgba(63, 91, 194, 0.247159)" : null}    ;
    flex-basis:  ${props => props.flexBasis };
    isolation: isolate;

    @media (min-width : 768px ) and (max-width : 1439px) {
        max-width: 171px;
        margin-left: ${props => props.marginLeft }; 
        /* flex-basis: 100%; */
        /* margin-right: ${props => props.marginRight };  */
    }

    &:hover {
        background-color: ${props =>  hoverColorPicker(props.btn)};
        color : ${props => props.btn === "Pro" ? "#829CFF" : null};
        transition : all .2s;
    }
`
const hoverColorPicker  = (btn) => {
    switch(btn) {
        case ("Basic" || "Ultimate") : {
            return "rgba(81, 117, 255, 0.35)";
            break;
        }

        case ("Ultimate") : {
            return "rgba(81, 117, 255, 0.35)";
            break;
        }

        case "Get Started" : {
            return "#829CFF"
            break;
        }
    }
}



const Button = (props) => {

    return(
        <ButtonStyle boxShadow = {props.isBoxShadow}
                     bgColor = {props.bgColor}
                     fontColor = {props.fontColor}
                     marginBottom = {props.marginBottom}
                     btn = {props.btn}
                     flexBasis = {props.flexBasis}
                     marginLeft = {props.marginLeft}
                     width = {props.width}
                     position = {props.position}
                     id = {props.id}
>                 
                    {props.children} 
        
        </ButtonStyle>
    )

}

export default Button;