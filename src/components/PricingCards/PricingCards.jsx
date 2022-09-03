import pricingPatternLogo from "../../assets/images/home/bg-pattern-pricing.svg";
import Button from "../Button/Button";
import styled from "styled-components"
import { useState } from "react";
import LinkStyleComponent from "../LinkStyle/LinkStyle";

const PricingCardsStyled = styled.div`
        width : 350px;
        height: 430px;
        padding-top: 40px;
        padding-bottom: 40px;
        background-image: url(${pricingPatternLogo});
        background-size: 240%;
        background-position: 49.5% 102%;
        background-repeat: no-repeat;
        background-color: ${props => props.pricingCardBgColor} ;
        border-radius: 18px;
        box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);
        margin-bottom: 50px;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width : 768px ) and (max-width : 1439px) {
            width: 100%;
            height: auto;
            flex-direction: row;
            flex-wrap: wrap;
            padding-top: 48px;
            padding-bottom: 48px;
            background-size: 880px;
            background-position: 171.5% 50%;
         }

        .price-section {
            color: ${props => props.pricingCardPriceFontColor} ;
            font-weight: 700;
            margin-bottom: 24px;

            @media (min-width : 768px ) and (max-width : 1439px) {
                margin-right: 175px;
                margin-left: 48px;
                text-align: left;
               
            }


            h2 {
                font-size: 20px;
                line-height: 28px;
                margin-bottom: 40px;

                @media (min-width : 768px ) and (max-width : 1439px) {
                    margin-top: 0px;
                    text-align: left;
            }

            }

            h1 {
                font-size: 56px;
                line-height: 64px;
                margin-bottom: 8px;

                @media (min-width : 768px ) and (max-width : 1439px) {
                    margin-top : -24px;
                    margin-bottom: -20px;
                    width: 100%;
                }

                
            }

            p { 
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;

                @media (min-width : 768px ) and (max-width : 1439px) {
                    margin-bottom: 0;
                }
            }
        }

        .specs-section {
            color: ${props => props.pricingCardFontColor};
            margin-bottom: 15px;
            
            @media (min-width : 768px ) and (max-width : 1439px) {
                text-align: left;
                /* margin-right: 90px; */
                margin-bottom: 0px;
                max-width: max-content;
                flex-basis: 50%;
            
            }

            p {
                @media (min-width : 768px ) and (max-width : 1439px) {
                margin-bottom: 19px;
            }

            }
            
        }
`;


const PricingCards = (props) => {

    const [id, setId] = useState(props.id);

    // console.log(props.id)

    return(
        <PricingCardsStyled onClick = {() => props.setCardRefSelected(props.id)}
                            pricingCardBgColor = {props.pricingCardBgColor}
                            pricingCardPriceFontColor = {props.pricingCardPriceFontColor}
                            pricingCardFontColor = {props.pricingCardFontColor}  >
            <div className="price-section">
                <h2> {props.subscription} </h2>
                <h1> {props.price} </h1>
                <p> {props.details} </p>
            </div>
            <div className="specs-section">
                <p> {props.spec1} </p>
                <p> {props.spec2} </p>
                <p> {props.spec3} </p>
            </div>
            <Button 
                    id = {props.id}
                    isBoxShadow = {false}
                    flexBasis = "100%"
                    btn = {props.btn}  
                    bgColor = {props.buttonBgColor}
                    fontColor = {props.buttonFontColor}
                    marginLeft = "48px"
                    // marginRight = "67.5%"
                    > 
                   <LinkStyleComponent to = '/signup'> Try for Free </LinkStyleComponent>  </Button>
        </PricingCardsStyled>
    )
}

export default PricingCards;