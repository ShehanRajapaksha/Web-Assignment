import React from "react";
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useUtility } from "../Hooks/UtilityProvider";


export default function NavButton({type}) {
    const isSmall = useUtility()
    console.log(isSmall);
    return(
        <div className="px-1 md:px-4 mx-1">
          <IconButton
            color="transparent"
            ripple={true}
            className="p-0 bg-transparent outline-none border-transparent shadow-none focus:outline-none  hover:shadow-none"
          >
            <FontAwesomeIcon 
                icon={type}
                size={isSmall ? "2x" : "1x"}
                style={{ color: "#636363" }} />
               
          </IconButton>
        </div>
    )
    
}