import "./Header.scss";
import logo from "../../assets/images/shared/logo.svg";
import Button from "../Button/Button";
import chartLogo from "../../assets/images/home/illustration-charts.svg";
import  styled from "styled-components"
import  {Link} from 'react-router-dom';
import LinkStyleComponent from "../LinkStyle/LinkStyle";

// const LinkStyle = styled(Link)`
   


// `


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
                {/* <svg className="Header__wrapper__charts" width="525" height="606" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><filter x="-27.9%" y="-12.1%" width="155.8%" height="148.5%" filterUnits="objectBoundingBox" id="c"><feMorphology radius="12.5" in="SourceAlpha" result="shadowSpreadOuter1"/><feOffset dy="50" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="25" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.293478072 0 0 0 0 0.359720343 0 0 0 0 0.604534647 0 0 0 0.247159091 0" in="shadowBlurOuter1"/></filter><filter x="-27.9%" y="-25.7%" width="155.8%" height="202.7%" filterUnits="objectBoundingBox" id="g"><feMorphology radius="12.5" in="SourceAlpha" result="shadowSpreadOuter1"/><feOffset dy="50" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="25" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.293478072 0 0 0 0 0.359720343 0 0 0 0 0.604534647 0 0 0 0.247159091 0" in="shadowBlurOuter1"/></filter><filter x="-27.9%" y="-7.8%" width="155.8%" height="131.1%" filterUnits="objectBoundingBox" id="i"><feMorphology radius="12.5" in="SourceAlpha" result="shadowSpreadOuter1"/><feOffset dy="50" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="25" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.293478072 0 0 0 0 0.359720343 0 0 0 0 0.604534647 0 0 0 0.247159091 0" in="shadowBlurOuter1"/></filter><rect id="b" x="0" y="0" width="224" height="309" rx="13"/><rect id="f" x="0" y="0" width="224" height="146" rx="13"/><rect id="j" x="0" y="0" width="224" height="483" rx="13"/><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stopColor="#024AFF" stopOpacity=".148" offset="0%"/><stop stopColor="#3B77CF" stopOpacity="0" offset="100%"/></linearGradient><circle id="a" cx="59" cy="59" r="59"/><mask id="k" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="118" height="118" fill="#fff"><use xlinkHref="#a"/></mask></defs><g fill="none" fillRule="evenodd"><g transform="translate(25 46)"><mask id="e" fill="#fff"><use xlinkHref="#b"/></mask><use fill="#000" filter="url(#c)" xlinkHref="#b"/><use fill="#FFF" xlinkHref="#b"/><path fill="url(#d)" mask="url(#e)" d="M-36.826 240.688L56.5 209.026 112 127.17l56.5 18.01 75.17-116.672V269l-280.496-1z"/><path stroke="#5175FF" strokeWidth="2" mask="url(#e)" d="M-36.826 240.688L56.5 209.026 112 127.17l56.5 18.01 75.17-116.672V269"/><path fill="#5175FF" opacity=".152" mask="url(#e)" d="M112 0h1v250h-1zM56 0h1v250h-1zM169 0h1v250h-1z"/><circle fill="#5175FF" mask="url(#e)" cx="112" cy="127" r="6"/><circle stroke="#5175FF" opacity=".25" mask="url(#e)" cx="112" cy="127" r="17.5"/><circle fill="#5175FF" mask="url(#e)" cx="56" cy="209" r="6"/><circle fill="#5175FF" mask="url(#e)" cx="169" cy="145" r="6"/><circle fill="#5175FF" mask="url(#e)" cx="224" cy="60" r="6"/><circle fill="#5175FF" mask="url(#e)" cy="228" r="6"/><g mask="url(#e)"><text opacity=".5" fontFamily="KumbhSans-Bold, Kumbh Sans" fontSize="11" fontWeight="bold" transform="translate(-12 260)"><tspan x="116.15" y="32" fill="#747B95">Jan</tspan></text><text opacity=".5" fontFamily="KumbhSans-Bold, Kumbh Sans" fontSize="11" fontWeight="bold" transform="translate(-12 260)"><tspan x="57.779" y="32" fill="#747B95">Dec</tspan></text><text opacity=".5" fontFamily="KumbhSans-Bold, Kumbh Sans" fontSize="11" fontWeight="bold" transform="translate(-12 260)"><tspan x="1.534" y="32" fill="#747B95">Nov</tspan></text><text opacity=".5" fontFamily="KumbhSans-Bold, Kumbh Sans" fontSize="11" fontWeight="bold" transform="translate(-12 260)"><tspan x="170.308" y="32" fill="#747B95">Feb</tspan></text><text opacity=".5" fontFamily="KumbhSans-Bold, Kumbh Sans" fontSize="11" fontWeight="bold" transform="translate(-12 260)"><tspan x="225.725" y="32" fill="#747B95">Mar</tspan></text><path fill="#747B95" opacity=".25" d="M0 268h224v1H0zM112 260h1v8h-1zM56 260h1v8h-1zM168 260h1v8h-1z"/></g></g><g transform="translate(25 385)"><mask id="h" fill="#fff"><use xlinkHref="#f"/></mask><use fill="#000" filter="url(#g)" xlinkHref="#f"/><use fill="#333950" xlinkHref="#f"/><g mask="url(#h)"><g fill="#FEFEFE" fillRule="nonzero"><path d="M80.64 95v-2.448l-6.768-.936 3.96-13.68h16.56l4.392 13.896-6.408.72V95h24.552v-2.448l-5.76-.648L93.888 41H86.4L70.128 91.688l-5.976.864V95H80.64zM93.6 75.416H78.552l7.2-24.624L93.6 75.416zm58.176 20.808c4.608 0 7.344-1.656 9.144-5.616l-1.224-1.008c-1.368 2.16-2.16 2.736-3.24 2.736-1.368 0-2.232-.936-2.232-3.672V69.296c0-10.44-4.104-14.832-14.328-14.832-11.16 0-17.424 4.32-18 11.088.576 2.376 2.376 3.672 4.968 3.672 2.736 0 5.184-1.944 5.4-6.84l.504-5.112a14.805 14.805 0 013.024-.288c5.472 0 7.2 2.232 7.2 9.72v4.392c-2.52.648-5.04 1.296-7.056 1.872-11.592 3.384-15.336 6.912-15.336 13.464 0 6.048 4.32 9.792 10.512 9.792 5.76 0 8.496-2.232 12.168-6.264 1.08 3.888 3.744 6.264 8.496 6.264zm-15.048-4.896c-3.384 0-5.4-2.016-5.4-6.336 0-5.256 2.664-8.64 7.704-10.728.864-.36 2.304-.792 3.96-1.224v14.976c-2.664 2.376-4.32 3.312-6.264 3.312zM63 100v4h95.132v-4z"/></g><path fill="#FEFEFE" fillRule="nonzero" d="M-67 71v4h95.132v-4zM193 71v4h95.132v-4z" opacity=".15"/></g></g><g transform="translate(276)"><use fill="#000" filter="url(#i)" xlinkHref="#j"/><use fill="#5175FF" xlinkHref="#j"/></g><path fill="#FFF" opacity=".15" d="M276 182h224v1H276z"/><g transform="translate(329 32)"><circle stroke="#FFF" opacity=".146" cx="59" cy="59" r="55.5"/><use stroke="#5CFCD3" mask="url(#k)" strokeWidth="20" strokeDasharray="302" xlinkHref="#a"/><text fontFamily="KumbhSans-Bold, Kumbh Sans" fontSize="32" fontWeight="bold" fill="#5CFCD3"><tspan x="26" y="70">87%</tspan></text></g><text fontFamily="KumbhSans-Bold, Kumbh Sans" fontSize="40" fontWeight="bold" fill="#FFF" transform="translate(276)"><tspan x="76" y="236">98k</tspan></text><g transform="translate(308 282)"><rect fill="#FFF" width="14" height="14" rx="7"/><rect fill="#7DA7FF" x="29" width="131" height="14" rx="7"/></g><g transform="translate(308 316)"><rect fill="#FFF" width="14" height="14" rx="7"/><rect fill="#7DA7FF" x="29" width="83" height="14" rx="7"/></g><g transform="translate(308 350)"><rect fill="#FFF" width="14" height="14" rx="7"/><rect fill="#7DA7FF" x="29" width="131" height="14" rx="7"/></g><g transform="translate(308 384)"><rect fill="#FFF" width="14" height="14" rx="7"/><rect fill="#7DA7FF" x="29" width="79" height="14" rx="7"/></g><g transform="translate(308 418)"><rect fill="#FFF" width="14" height="14" rx="7"/><rect fill="#7DA7FF" x="29" width="131" height="14" rx="7"/></g></g></svg> */}
                <img className="Header__wrapper__charts" src={chartLogo} alt="charts logo" />
            </div>
           
        </div>
    )
}

export default Header;