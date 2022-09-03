import "./PricingCardSection.scss";
import PricingCards from "../PricingCards/PricingCards";


const PricingCardSection = (props) => {
    

    
    return(
        <div className="PricingCardSection">
             

        <PricingCards     
                      btn = "Basic"    
                      id = {0}
                      setCardRefSelected = {props.setCardRefSelected}
                      pricingCardBgColor = "#FFF"
                      pricingCardPriceFontColor = "#000"
                      pricingCardFontColor = "rgba(116, 123, 149, 1)"
                      subscription = "Basic"
                      price = "Free"
                      details = "Up to 5 users for free"
                      spec1 = "Basic document collaboration"
                      spec2 = "2 GB storage"
                      spec3 = "Great security and support"
                      buttonBgColor = "rgba(81, 117, 255, 0.15)"
                      buttonFontColor = "#5175FF"
                      />

            <PricingCards 
                      btn = "Pro"
                      id = {1} 
                      setCardRefSelected = {props.setCardRefSelected}
                      pricingCardBgColor = "#5175FF"
                      pricingCardPriceFontColor = "#FFF"
                      pricingCardFontColor = "rgba(255, 255, 255, 0.75)"
                      subscription = "Pro"
                      price = "$ 9.99"
                      details = "Per User, billed monthly"
                      spec1 = "All essential integretions"
                      spec2 = "50 GB storage"
                      spec3 = "More control and insights"
                      buttonBgColor = "#FFF"
                      buttonFontColor = "#5175FF"
                      />


                <PricingCards      
                      btn = "Ultimate"  
                      id = {2}  
                      setCardRefSelected = {props.setCardRefSelected}
                      pricingCardBgColor = "#FFF"
                      pricingCardPriceFontColor = "#000"
                      pricingCardFontColor = "rgba(116, 123, 149, 1)"
                      subscription = "Ultimate"
                      price = "$ 19.99"
                      details = "Per user, billed monthly"
                      spec1 = "Robust work management"
                      spec2 = "100 GB storage"
                      spec3 = "VIP support"
                      buttonBgColor = "rgba(81, 117, 255, 0.15)"
                      buttonFontColor = "#5175FF"
                      />
        </div>
    )
}

export default PricingCardSection;