import React, { useState } from 'react'
import { List, ListItem, Card } from "@material-tailwind/react";
import FilterListItem from '../Components/FilterListItem';
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const theme = createTheme({
    components: {
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    width: 16,
                    height: 16,
                    backgroundColor: 'rgba(225, 46, 2, 1)', // Thumb color
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: 'none', // Remove halo effect
                    },
                },
                rail: {
                    backgroundColor: 'rgba(205, 64, 34, 1)', // Rail color
                    border: 'none', // Remove border
                },
                track: {
                    backgroundColor: 'rgba(205, 64, 34, 1)', // Track color
                    border: 'none', // Remove border
                },
            },
        },
    },
});

export default function FilterComponent(params) {
    const [isRotated, setIsRotated] = useState(false);
    const [range, setRange] = React.useState([0, 3000]);
    function handleChanges(event, newValue) {
        setRange(newValue);
    }
    function handleInputChange(index, event) {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            const newRange = [...range];
            newRange[index] = newValue;
            setRange(newRange);
        }
    }

    const handleSortClick = () => {
        setIsRotated(!isRotated);
    };
    return(
        <Card className='mt-8' >
                        <List>
                            <ListItem className='font-sans -mb-3 hover:bg-white'><b>Filters</b></ListItem>
                            <div className="w-3/6 ml-2">
                                <hr className="border-gray-300 " />
                            </div>
                            <FilterListItem type={"Featured Items"} />
                            <FilterListItem type={"Top Rated"} />
                            <FilterListItem type={"Best Selling"} />
                            <FilterListItem type={"Most Recent"} />
                            <ListItem className='font-sans -mb-3 mt-3  hover:bg-white'><b>Price</b></ListItem>
                            <div className="w-3/6 ml-2 ">
                                <hr className="border-gray-300 " />
                            </div>
                            <div className='flex justify-center items-center my-2'>
                                <ThemeProvider theme={theme}>
                                    <Slider sx={{ width: 180 }} value={range} onChange={handleChanges} max={6000} min={0} />
                                </ThemeProvider>
                            </div>
                            <div className='flex flex-row justify-center items-center -mt-3'>
                                <div className='flex flex-col items-end w-24'>
                                    <div className='mr-2'>Min</div>
                                    <input
                                        className='border  border-blue-gray-300 w-12 text-center'
                                        value={range[0]}
                                        onChange={(e) => handleInputChange(0, e)} />
                                </div>
                                <div className='mx-4 mt-4'>-</div>
                                <div className='flex flex-col items-start w-24'>
                                    <div className='ml-2'>Max</div>
                                    <input
                                        className='border border-blue-gray-300 w-12 text-center'
                                        value={range[1]}
                                        onChange={(e) => handleInputChange(1, e)} />
                                </div>
                            </div>
                            <ListItem
                                className='flex flex-row justify-between mt-2 hover:bg-transparent focus:bg-transparent'
                                ripple={false}
                                onClick={handleSortClick}>
                                <b>Sort by:</b> <span>Low</span>
                                <span>
                                    {isRotated ? (
                                        <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-180deg)', transition: 'transform 0.3s' }} />
                                    ) : (
                                        <FontAwesomeIcon icon={faArrowRight} style={{ transition: 'transform 0.3s' }} />
                                    )}
                                </span>
                                <span>High</span>
                            </ListItem>


                        </List>
                    </Card>
    )
}