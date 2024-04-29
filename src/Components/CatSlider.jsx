import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryCard from "./CategoryCard";
import Appliances from "../assets/Appliances.png";
import KidsToys from "../assets/Baby and Kids.png";
import Bathroom from "../assets/Bathroom.png";
import Bedroom from "../assets/Bedroom.png";
import Garden from "../assets/Garden.png";
import HomeDeco from "../assets/HomeDeco.png";
import Kitchen from "../assets/Kitchen.png";
import Pets from "../assets/Pets.png"
import Bathroom1 from "../assets/Bathroom1.png";
import { useUtility } from "../Hooks/UtilityProvider";

export default function CatSlider(){
    const {openCart}=useUtility()
  
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter:90
        }
      };
    
    
    return(
        <div>
        <Carousel
            responsive={responsive}
            partialVisible={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={!openCart}
            swipeable={true}  
        >
            <CategoryCard imgSrc={HomeDeco} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Home Decor</h3>
            </CategoryCard>
            <CategoryCard imgSrc={Garden} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Garden</h3>
            </CategoryCard>
            <CategoryCard imgSrc={Appliances} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Appliances</h3>
            </CategoryCard>
            <CategoryCard imgSrc={KidsToys} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Baby and Kids</h3>
            </CategoryCard>
            <CategoryCard imgSrc={Pets} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Pets</h3>
            </CategoryCard>
            <CategoryCard imgSrc={Bathroom} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Bathroom</h3>
            </CategoryCard>
            <CategoryCard imgSrc={Bathroom1} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Body Care</h3>
            </CategoryCard>
            <CategoryCard imgSrc={Bedroom} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Bedroom</h3>
            </CategoryCard>
            <CategoryCard imgSrc={Kitchen} animation="scale">
                <h3 className="text-2xl font-bold flex items-center justify-center">Kitchen</h3>
            </CategoryCard>
        </Carousel>
        </div>
    );
};
