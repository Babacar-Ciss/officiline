import Button from "../Button/Button";
import CounterContainer from "../CounterContainer/CounterContainer";
import LinkStyleComponent from "../LinkStyle/LinkStyle";

import "./Footer.scss";


const Footer = () => {
    return(
        <div className="Footer">
            <div className="Footer__container">
                <div className="Footer__container--left">
                    <h3>COMING <span> 4 NOV 2023 </span></h3>
                    <CounterContainer
                        bgColor = "rgba(51, 57, 80, 1)"
                        pColor = "rgba(255, 255, 255, 0.5)"
                        fontColor = "rgba(255, 255, 255, 1)"
                    />

                </div>
                <Button  bgColor = "#5175FF"
                         btn = "Get Started"
                         fontColor = "#FFF"
                         marginBottom = "55px"
                         > 
                <LinkStyleComponent to='/signup'>  Get Started    </LinkStyleComponent>           
                         </Button>

            </div>
        </div>
    )
}

export default Footer;