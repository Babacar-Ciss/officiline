import React from 'react';
import "./Home.scss";
import Header from '../Header/Header';
import PricingCardSection from '../PricingCardSection/PricingCardSection';
import Footer from '../Footer/Footer';

export default function Home(props) {

  return (
    <>
    <div className='Home-wrapper'>
        <Header />
        <PricingCardSection setCardRefSelected = {props.setCardRefSelected} />
    </div>
    <Footer />
    </>
  )
}
