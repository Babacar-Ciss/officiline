import "./CounterContainer.scss";
import Count from "../Count/Count";
import { useState, useEffect } from "react";


const CounterContainer = (props) => {
    
    const currentYear = new Date().getFullYear();
    const DeadlineTime = new Date(`November 4 ${currentYear} 00:00:00`)
    const currentTime = new Date()
    const remainingTime = DeadlineTime - currentTime;

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    const setRemainingTimeHandler = () => {
            setDays(Math.floor(remainingTime / 1000 / 60 / 60 / 24));
            setHours(Math.floor(remainingTime / 1000 / 60 / 60) % 24);
            setMinutes(Math.floor(remainingTime / 1000 / 60 ) % 60);
            setSeconds(Math.floor(remainingTime / 1000 ) % 60);
    }

    useEffect (() => {
        const idInterval = setInterval(setRemainingTimeHandler, 1000)
        return () => {
            clearInterval(idInterval);
        }
    }, [seconds])
    

    return(
        <div className="CounterContainer">
            <Count bgColor={props.bgColor} pColor={props.pColor} fontColor={props.fontColor} remain = {days < 10 ? `0${days}` : days} title= "days"/>
            <Count bgColor={props.bgColor} pColor={props.pColor} fontColor={props.fontColor} remain = {hours  < 10 ? `0${hours}` : hours} title= "hours"/>
            <Count bgColor={props.bgColor} pColor={props.pColor} fontColor={props.fontColor} remain = {minutes  < 10 ? `0${minutes}` : minutes} title= "min"/>
            <Count bgColor={props.bgColor} pColor={props.pColor} fontColor={props.fontColor} remain = {seconds  < 10 ? `0${seconds}` : seconds} title= "sec"/>
        </div>
    )
}

export default CounterContainer;