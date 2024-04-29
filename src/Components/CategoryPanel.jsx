import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-tailwind/react";
import { InnerCatPanel } from "./InnerCatpanel";

export function CategoryPanel({openNav}) {

    const [hoveredItem, setHoveredItem] = useState(null);

    if(!openNav) return null;
   
    return (
        <div className={`mega-menu absolute normal-case font-normal bg-gradient-to-r from-whiteshade1 via-whiteshade1 to-white shadow-lg overflow-hidden border w-full z-10 -mt-4 ${openNav ? 'h-auto' : 'h-0 opacity-0'}`} >

            <div className="flex px-8 py-6 border-b -mx-4 overflow-hidden ">
                <div className="w-1/5 px-4  mr-4 xl:mr-0">
                    <ul>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row  text-center`}
                            onMouseEnter={() => setHoveredItem(1)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 1 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 1 ? "h6" : "body1"}>
                                Home Decor
                            </Typography>
                            <span className="ml-auto ">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 1 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row `}
                            onMouseEnter={() => setHoveredItem(2)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 2 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 2 ? "h6" : "body1"}>
                                Garden
                            </Typography>
                            <span className="ml-auto">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 2 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row `}
                            onMouseEnter={() => setHoveredItem(3)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 3 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 3 ? "h6" : "body1"}>
                                Appliances
                            </Typography>
                            <span className="ml-auto block lg:inline">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 3 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row `}
                            onMouseEnter={() => setHoveredItem(4)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 4 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 4 ? "h6" : "body1"}>
                                Baby and Kids
                            </Typography>
                            <span className="ml-auto">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 4 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row `}
                            onMouseEnter={() => setHoveredItem(5)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 5 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 5 ? "h6" : "body1"}>
                               Pets
                            </Typography>
                            <span className="ml-auto">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 5 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row `}
                            onMouseEnter={() => setHoveredItem(6)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 6 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 6 ? "h6" : "body1"}>
                                Bathroom
                            </Typography>
                            <span className="ml-auto">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 6 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row `}
                            onMouseEnter={() => setHoveredItem(7)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 7 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 7 ? "h6" : "body1"}>
                                Bedroom
                            </Typography>
                            <span className="ml-auto">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 7 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row `}
                            onMouseEnter={() => setHoveredItem(8)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 8 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 8 ? "h6" : "body1"}>
                                Body Care
                            </Typography>
                            <span className="ml-auto">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 8 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                        <li
                            className={`rounded-xl pr-2 py-2  flex flex-row `}
                            onMouseEnter={() => setHoveredItem(9)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Typography className={`${hoveredItem === 9 ? 'ml-4' : 'ml-2'}`}
                                variant={hoveredItem === 9 ? "h6" : "body1"}>
                                Kitchen
                            </Typography>
                            <span className="ml-auto">
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ color: hoveredItem === 9 ? "#E12E02" : "#888888" }}
                                    className="transition-colors duration-300"
                                />
                            </span>
                        </li>
                    </ul>

                </div>
                <div className="w-4/5 px-4 border-l-2">
                    <InnerCatPanel hoveredItem={hoveredItem}/>
                </div>
            </div>
        </div>
    );
}
