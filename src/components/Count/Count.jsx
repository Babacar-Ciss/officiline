import styled from "styled-components";

const CountStyle = styled.div`
    width: 100px;
    height: 128px;
    background-color: ${props => props.bgColor};
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    text-align: center;

    &:last-child{
        margin-right: 0;
    }

    @media (min-width : 375px ) and (max-width : 767px) {
        width: 72px;
        height: 92px;
        margin-right: 13px;
    }

    h1 {
        margin-top: 25px;
        margin-bottom: 3px;
        font-size: 56px;
        font-weight: 700;
        line-height: 48px;
        color: ${props => props.fontColor};

        @media (min-width : 375px ) and (max-width : 767px) {
            margin-top: 5px;
            font-size : 32px;
        }
    }

    p {
        color: ${props => props.pColor};
        font-weight: 700;
        margin-top: auto;
        margin-bottom: 17px;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        opacity: 0.5;

        @media (min-width : 375px ) and (max-width : 767px) {
            font-size : 12px;
            margin-bottom: 13px;
        }
    }
`

const Count = (props) => {
    return(
        <CountStyle
                    bgColor = {props.bgColor}
                    fontColor = {props.fontColor} 
                    pColor = {props.pColor}
                    >

            <h1> {props.remain} </h1>
            <p> {props.title} </p>
        </CountStyle>
    )
}

export default Count;