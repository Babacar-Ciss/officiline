import React from 'react';
import signUpPageLogo from '../../assets/images/shared/logo.svg';
import crossLogo from '../../assets/images/sign-up/icon-cross.svg';
import CounterContainer from "../CounterContainer/CounterContainer"
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import "./SignUpPage.scss"
import selectedLogo from '../../assets/images/sign-up/icon-check.svg'
import  {useState, useEffect} from "react";
import {useForm} from 'react-hook-form';

export default function SignUpPage(props) {

  const [isClose, setIsClose] = useState(false);
  const [selectedId, setSelectedId] = useState(props.cardRefSelected ? props.cardRefSelected : 0);
  const [isEmailCorrect, setIsEmailCorrect] = useState(false)
  const regexPatternForEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g ; 


  const {register, handleSubmit, watch, formState : {errors} } = useForm();

  const checkedid = (index) => {
    if(index === selectedId) {
      setSelectedId(null)
    }
    setSelectedId(index);
  }


  const ARRAY_LIST = [
    {
      formule : 'Basic Pack',
      spanFormule : "Free"
    },
    {
      formule : 'Pro Pack',
      spanFormule : "$9.99"
    },
    {
      formule : 'Ultimate Pack',
      spanFormule : "$19.99"
    }
  ]


  const watchEmail = watch("email");


  useEffect(() => {
   const result = regexPatternForEmail.test(watchEmail)
    if(result) {
    setIsEmailCorrect(true)
   }else {
    setIsEmailCorrect(false)
   }
  }, [watchEmail]);

 

  return (
    <div className='SignUpPage' onClick={() => console.log(props.id)}>
        
        <div className='SignUpPage__container'>
          <Link to="/" > <img className='SignUpPage__container__logo' src={signUpPageLogo}  alt="logo" /> </Link>   
            <div className='SignUpPage__container--left'>
                <h1 id='h1'> Work smarter. Save time. </h1>
                <p id='details' >Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>

                <div className='SignUpPage__container--left__countdown-section'>
                    <h3>COMING <span> 4 NOV 2023 </span></h3>
                    <CounterContainer
                        bgColor = "rgba(81, 117, 255, 0.1)"
                        pColor = "rgba(51, 57, 80, 0.5)"
                        fontColor = "rgba(81, 117, 255, 1)"
                    />
                </div>
            </div>

            <div className='SignUpPage__container--right'>
                <form  onSubmit={handleSubmit((data) => {
                    console.log(data);
                    isCorrectEmail();
                })}  
                       className='SignUpPage__container--right__register'>
                  
                  {errors.name ? <label htmlFor="name"><img src={crossLogo} alt="crossLogo" /></label> : null}   
                  <input {...register("name", {required : "votre nom svp", minLength : 3})} 
                        type="text" name='name' placeholder='Name'
                        style={errors.name ? {borderBottom : "1px solid #F05B5B"} : null} />
                  
                  {errors.email ? <label htmlFor="email"><img src={crossLogo} alt="crossLogo" /></label> : null}
                  <input {...register("email", {required : "email svp"})}   
                        type="email" name='email' placeholder='Email Address' 
                        style={ errors.email ? {borderBottom : "1px solid #F05B5B"} : !isEmailCorrect ? {color : "#F05B5B"} : null }/>
                  
                    <div className='SignUpPage__container--right__register__dropbox'>
                          
                              <div id="formule">          
                                      {ARRAY_LIST[+selectedId].formule}
                                      <span className='formule'>
                                        {ARRAY_LIST[+selectedId].spanFormule}
                                      </span>        
                              </div>
                          
                          <div onMouseLeave={() => {setIsClose(false)}}  className='SignUpPage__container--right__register__dropbox__options' style ={isClose ? {display : "block", transform : 'rotate("45deg")',} : {display : "none"}}>
                            
                              {
                                ARRAY_LIST.map((list, index) => {
                                  return(
                                    <div className='SignUpPage__container--right__register__dropbox__options--option'
                                         key={list.formule+""+index} 
                                         onClick={() => checkedid(index)}> 
                                    {list.formule} 
                                      
                                      <span className='formule'>
                                        {list.spanFormule}
                                      </span>
                                      
                                      {selectedId === index ? <img src={selectedLogo} alt="logo-checked" /> : null}  
                                    
                                    </div>
                                  )
                                })
                              }     
                          
                          </div>
                          <span onClick={() => {setIsClose(!isClose)}}  
                                style ={isClose ? {transform : 'rotate(180deg)',  top: "4px", right: "23px"} : {display : "block"}}
                                className='SignUpPage__container--right__register__dropbox--arrow' ></span>
                    </div>
                  
                  <input type="number" name='phone' placeholder='Phone Number'/>
                  
                  <input type="text" name='compagny' placeholder='Compagny' />
                  
                  <div id = 'register--btn'>


                  
                  <Button  bgColor = "#5175FF"
                           fontColor = "#FFF"
                           btn = "Get Started"
                           width
                           position
                         > 
                        Get on the list
                         </Button>
                  </div>
                 
                </form>
            </div>
        </div>
    </div>
  )
}
