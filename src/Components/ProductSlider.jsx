import React, { useState,useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './Card';
import { Button } from "@material-tailwind/react";
import {data} from "../Data/data"
import { useUtility } from "../Hooks/UtilityProvider";

export default function ProductSlider({data:propData=[]}){
    const {openCart}=useUtility()
    const [isCartButtonHovered, setIsCartButtonHovered] = useState(false);
    const [items,setdata] =React.useState([])

    useEffect(() => {
      if (propData.length === 0) {
          setdata(data)
      } else {
          // Use propData
          setdata(data.filter(item=>propData.includes(item.id)));
      }
  }, [propData]);

    const responsive = {
        desktop: {
          breakpoint: { max: 4000, min: 1440 },
          items: 4
        },
        Laptop: {
            breakpoint: { max: 1440, min: 1350 },
            items: 4
          },
        LaptopSmall: {
        breakpoint: { max: 1350, min: 1010 },
        items: 3
        },
        tablet: {
          breakpoint: { max: 1075, min: 950 },
          items: 2,
          partialVisibilityGutter: 80 
       
        },
        tabletSmall: {
            breakpoint: { max: 760, min: 450 },
            items: 1,
            partialVisibilityGutter: 100 
          },
        mobile: {
          breakpoint: { max: 450, min: 360},
          items: 1,
          partialVisibilityGutter: 20 
        },
        smallMobile: {
          breakpoint: { max: 360, min: 0},
          items: 1,  
        }
      };
    
    return(
      <div>
        <div >
          <Carousel
              responsive={responsive}
              partialVisible={true}
              removeArrowOnDeviceType={["tablet","tabletSmall", "mobile"]}
              arrows={!openCart}
              className="pb-10 pt-4 pl-0"
          >
            {items.map((item,index)=>(
              <ProductCard item={item} index={index}/>
            ))}
        
          </Carousel>
        </div>
        
        <div className="flex  justify-center ">
            <div className={`overflow-hidden ${propData.length === 0 ? '' : 'hidden'}`}>
                <Button
                    ripple={true}
                    fullWidth={true} 
                    className="mx-auto transition-colors duration-300 ease-in-out shadow-none active:scale-100 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none">
                    View More Products
                </Button>
            </div>
        </div>
      </div>
    );
};
