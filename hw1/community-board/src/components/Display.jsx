import React from "react";
import Card from "./Card";
import marthasKitchenImage from "../assets/marthaskitchen.jpg";
import medicalHelpImage from "../assets/medical1.jpg";
import shelter1 from "../assets/shelter1.jpg";
import alumRockImage from "../assets/alumrock1.jpg";
import mentalHealthImage from "../assets/mental1.jpg";
import shelter2 from "../assets/shelter2.jpg";
import pathway from "../assets/pathway.jpg";
import sacredHeartImage from "../assets/foodbank.webp";
import billWilsonImage from "../assets/billWilson.jpg";
import secondHarvestImage from "../assets/secondHarvest.jpg";
const Display = (props) => {
    return (
        <div className='display-container'>
            <Card title="Martha's Soup Kitchen" description="Hot food! 4 days a week" image={marthasKitchenImage} alt="Photo of service for people experiencing homelessness"/>
            <Card title="Sacred Heart Community Service" description="Provides food, clothing, and housing assistance to families in need. Open Monday-Saturday." image={sacredHeartImage} alt="Volunteers distributing food packages" />
            <Card title="Life Moves Georgia Travis House" description="Emergency shelter for single adult women and families with children. Open 24 Hours. 60 day stay" image = {shelter1} alt="Happy family of 4 pictured" />
            <Card title = "Alum Rock Counseling Center/Mobile Crisis Intervention" description = "The mission of ARCC is to heal families and inspire youth to reach their full potential." image={alumRockImage} alt= "Photo of smiling children in white tshirts" />
            <Card title="Momentum for Mental Health" description="Mental health support for those in need! " image={mentalHealthImage} alt="Photo of volunteers in blue tshirts cheering"/>
            <Card title="Family Supportive Housing Shelter" description="Welcome single and two parent families" image = {shelter2} alt="Group of people eating at shelter" />
            <Card title="Pathway Society" description="Treatment options that Pathway Inc. provides include: residential programs, transitional programs, outpatient counseling, and relapse prevention programs." image = {pathway} alt="One woman looknig at camera with Pathway Society logo on top left" />
            <Card title="Sacred Heart Community Service" description="Provides food, clothing, and housing assistance to families in need. Open Monday-Saturday." image={sacredHeartImage} alt="Volunteers distributing food packages" />
            <Card title="Bill Wilson Center" description="Support services for homeless youth, including shelter and counseling." image={billWilsonImage} alt="Teenagers in a support group discussion" />
            <Card title = "Medical Help County of Santa Clara" description = "Provide assistance to adults over 65 years of age who are functionally impaired. Open 24/7." image={medicalHelpImage} alt="Photo of service for people experiencing homelessness"/>
            <Card title="Second Harvest Food Bank" description="Nutritious meals and groceries for low-income individuals and families." image={secondHarvestImage} alt="People receiving fresh produce at a food bank" />
        </div>    
    );
}
export default Display;