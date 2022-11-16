import "./Header.scss";
import logo from "../../assets/images/shared/logo.svg";
import Button from "../Button/Button";
import chartLogo from "../../assets/images/home/illustration-charts.svg";
import  {Link} from 'react-router-dom';
import LinkStyleComponent from "../LinkStyle/LinkStyle";


const Header = () => {
    return(
        <div className="Header">

            <Link to='/'>  <img className="Header__logo" src={logo} alt="logo" /> </Link>
            
            <div className="Header__wrapper">
            <div className="Header__wrapper__description">
                <h1> A simple solution to complex tasks is coming soon </h1>
                <p> Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity. </p>
                 <Button isBoxShadow 
                        btn = "Get Started"
                        bgColor = "#5175FF"
                        fontColor = "#FFF"> 
                     <LinkStyleComponent to="/signup" >     Get Started       </LinkStyleComponent>
                </Button>
            
            </div>
                <img className="Header__wrapper__charts" src={chartLogo} alt="charts logo" />
            </div>
           
        </div>
    )
}

export default Header;