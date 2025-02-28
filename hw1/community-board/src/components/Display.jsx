import React from "react";
import Card from "./Card";
import marthasKitchenImage from "../assets/marthaskitchen.jpg";
import medicalHelpImage from "../assets/medical1.jpg";
import shelter1 from "../assets/shelter1.jpg";
const Display = (props) => {
    return (
        <div className='display'>
            <Card title = "Medical Help County of Santa Clara" description = "Provide assistance to adults over 65 years of age who are functionally impaired. Open 24/7." image={medicalHelpImage} alt="Photo of service for people experiencing homelessness"/>
            <Card title="Martha's Soup Kitchen" description="Hot food! 4 days a week" image={marthasKitchenImage} alt="Photo of service for people experiencing homelessness"/>
            <Card title="Life Moves Georgia Travis House" description="Emergency shelter for single adult women and families with children. Open 24 Hours. 60 day stay" image = {shelter1} alt="Happy family of 4 pictured" />
            <Card title = "Medical Help County of Santa Clara" description = "Provide assistance to adults over 65 years of age who are functionally impaired. Open 24/7." image={medicalHelpImage} alt="Photo of service for people experiencing homelessness"/>
            <Card title="Martha's Soup Kitchen" description="Hot food! 4 days a week" image={marthasKitchenImage} alt="Photo of service for people experiencing homelessness"/>
            <Card title="Life Moves Georgia Travis House" description="Emergency shelter for single adult women and families with children. Open 24 Hours. 60 day stay" image = {shelter1} alt="Happy family of 4 pictured" />
        
        </div>    
    );
}
export default Display;