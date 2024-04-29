import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeft, faBars,  faList, faLocationDot, faPowerOff,  faUserGroup, faXmark } from "@fortawesome/free-solid-svg-icons";

export function MobileSideBar() {
  const [open, setOpen] = React.useState(1);
  const [nestedopen, setNestedOpen] = React.useState(0);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const handleNestedOpen = (value) => {
    setNestedOpen(nestedopen === value ? 0 : value);
  };
  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };

  return (
    <div className="w-2/3 h-screen z-50">

      <IconButton
        variant="text"
        className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none " // Adjusted positioning
        ripple={true}
        onClick={openDrawer}
      >
        {isDrawerOpen ? (
          <FontAwesomeIcon icon={faXmark} size="2x" style={{ color: "black" }} />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" style={{ color: "black" }} />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="w-4/5 ">
        <Card
          color="transparent"
          shadow={false}
          className="h-screen w-full p-4  bg-white overflow-y-scroll"
        >

          <div className="mb-2 flex items-center gap-4 p-4">
            <FontAwesomeIcon icon={faArrowLeft} size="1x" onClick={closeDrawer} />
            <img
              src="/icons/Zenko-logo-small.png"
              alt="brand"
              className="h-auto w-auto"
            />

          </div>

          <List>
            <Accordion
              open={open === 1}

            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3 focus:outline-none"
                >
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faList} className="h-5 w-5" style={{ color: open === 1 ? "#E12E02" : "#888888" }} />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal ">
                    Categories
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0 ml-2">
                  <Accordion
                    open={nestedopen === 1}

                  >
                    <ListItem className="p-0" selected={nestedopen === 1}>
                      <AccordionHeader
                        onClick={() => handleNestedOpen(1)}
                        className="border-b-0 p-3 focus:outline-none"
                      >
                        <ListItemPrefix>
                          <FontAwesomeIcon icon={faAngleRight} rotation={nestedopen===1? 90:0} size="1x" className="h-5 w-5 " />
                        </ListItemPrefix> 
                        <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
                          Home Decor
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0 ml-4">
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Rugs</Typography>
                          
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Curtains</Typography>
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Cushions</Typography>
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Photo Frames</Typography>
                        </ListItem>

                      </List>
                    </AccordionBody>
                  </Accordion>
                  <Accordion
                    open={nestedopen === 2}

                  >
                    <ListItem className="p-0" selected={nestedopen === 2}>
                      <AccordionHeader
                        onClick={() => handleNestedOpen(2)}
                        className="border-b-0 p-3 focus:outline-none"
                      >
                        <ListItemPrefix>
                          <FontAwesomeIcon icon={faAngleRight} size="1x" rotation={nestedopen===2? 90:0} className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
                          Garden
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0 ml-4">
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Garden Lights</Typography>
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Tools & Equipment</Typography>
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Garden Furniture</Typography>
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small"> Door Mats</Typography>
                        </ListItem>

                      </List>
                    </AccordionBody>
                  </Accordion>
                  <Accordion
                    open={nestedopen === 3}

                  >
                    <ListItem className="p-0" selected={nestedopen === 3}>
                      <AccordionHeader
                        onClick={() => handleNestedOpen(3)}
                        className="border-b-0 p-3 focus:outline-none"
                      >
                        <ListItemPrefix>
                          <FontAwesomeIcon icon={faAngleRight} size="1x" rotation={nestedopen===3? 90:0} className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
                          Appliances
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0 ml-4">
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Electronics</Typography>
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Coffee Makers</Typography>
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small">Air Treatment</Typography>
                        </ListItem>
                        <ListItem className="py-2">
                          <ListItemPrefix>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                          </ListItemPrefix>
                          <Typography variant="small"> Vaccum Cleaners</Typography>
                        </ListItem>

                      </List>
                    </AccordionBody>
                  </Accordion>
                  <Accordion
                  open={nestedopen === 4}

                >
                  <ListItem className="p-0" selected={nestedopen === 4}>
                    <AccordionHeader
                      onClick={() => handleNestedOpen(4)}
                      className="border-b-0 p-3 focus:outline-none"
                    >
                      <ListItemPrefix>
                        <FontAwesomeIcon icon={faAngleRight} size="1x" rotation={nestedopen===4? 90:0} className="h-5 w-5" />
                      </ListItemPrefix>
                      <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
                        Baby & Kids
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0 ml-4">
                      <ListItem className="py-2">
                        <ListItemPrefix>
                          <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Typography variant="small">Kids Furniture</Typography>
                      </ListItem>
                      <ListItem className="py-2">
                        <ListItemPrefix>
                          <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Typography variant="small">Kids Toys</Typography>
                      </ListItem>
                      <ListItem className="py-2">
                        <ListItemPrefix>
                          <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Typography variant="small">Prams & Strollers</Typography>
                      </ListItem>
                      <ListItem className="py-2">
                        <ListItemPrefix>
                          <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Typography variant="small"> Play Mats</Typography>
                      </ListItem>

                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                open={nestedopen === 5}

              >
                <ListItem className="p-0" selected={nestedopen === 5}>
                  <AccordionHeader
                    onClick={() => handleNestedOpen(5)}
                    className="border-b-0 p-3 focus:outline-none"
                  >
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faAngleRight} size="1x" rotation={nestedopen===5? 90:0} className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
                      Pets
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0 ml-4">
                    <ListItem className="py-2">
                      <ListItemPrefix>
                        <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                      </ListItemPrefix>
                      <Typography variant="small">Cat Supplies</Typography>
                    </ListItem>
                    <ListItem className="py-2">
                      <ListItemPrefix>
                        <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                      </ListItemPrefix>
                      <Typography variant="small">Dog Supplies</Typography>
                    </ListItem>
                    <ListItem className="py-2">
                      <ListItemPrefix>
                        <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                      </ListItemPrefix>
                      <Typography variant="small">Pet Toys</Typography>
                    </ListItem>
                    <ListItem className="py-2">
                      <ListItemPrefix>
                        <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                      </ListItemPrefix>
                      <Typography variant="small"> Cleaning & Maintenance</Typography>
                    </ListItem>

                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
              open={nestedopen === 6}

            >
              <ListItem className="p-0" selected={nestedopen === 6}>
                <AccordionHeader
                  onClick={() => handleNestedOpen(6)}
                  className="border-b-0 p-3 focus:outline-none"
                >
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faAngleRight} size="1x" rotation={nestedopen===6? 90:0} className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
                    Bathroom
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0 ml-4">
                  <ListItem className="py-2">
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography variant="small">Bathroom Furniture</Typography>
                  </ListItem>
                  <ListItem className="py-2">
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography variant="small">Towels</Typography>
                  </ListItem>
                  <ListItem className="py-2">
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography variant="small">Soap Dispensers</Typography>
                  </ListItem>
                  <ListItem className="py-2">
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography variant="small"> Laundry & Cleaning</Typography>
                  </ListItem>

                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
            open={nestedopen === 7}

          >
            <ListItem className="p-0" selected={nestedopen === 7}>
              <AccordionHeader
                onClick={() => handleNestedOpen(7)}
                className="border-b-0 p-3 focus:outline-none"
              >
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faAngleRight} size="1x" rotation={nestedopen===7? 90:0} className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
                  Bedroom
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0 ml-4">
                <ListItem className="py-2">
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography variant="small">Bedroom Furniture</Typography>
                </ListItem>
                <ListItem className="py-2">
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography variant="small">Mattresses</Typography>
                </ListItem>
                <ListItem className="py-2">
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography variant="small">Quilt Covers</Typography>
                </ListItem>
                <ListItem className="py-2">
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography variant="small">Pillow Cases</Typography>
                </ListItem>

              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
          open={nestedopen === 8}

        >
          <ListItem className="p-0" selected={nestedopen === 8}>
            <AccordionHeader
              onClick={() => handleNestedOpen(8)}
              className="border-b-0 p-3 focus:outline-none"
            >
              <ListItemPrefix>
                <FontAwesomeIcon icon={faAngleRight} size="1x" rotation={nestedopen===8? 90:0} className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
                Body Care
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 ml-4">
              <ListItem className="py-2">
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                </ListItemPrefix>
                <Typography variant="small">Oral Care</Typography>
              </ListItem>
              <ListItem className="py-2">
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                </ListItemPrefix>
                <Typography variant="small">Skin Care</Typography>
              </ListItem>
              <ListItem className="py-2">
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                </ListItemPrefix>
                <Typography variant="small">Hair Care</Typography>
              </ListItem>
              <ListItem className="py-2">
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                </ListItemPrefix>
                <Typography variant="small">Cosmetics</Typography>
              </ListItem>
              <ListItem className="py-2">
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                </ListItemPrefix>
                <Typography variant="small">Body Care</Typography>
              </ListItem>
              <ListItem className="py-2">
                <ListItemPrefix>
                  <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
                </ListItemPrefix>
                <Typography variant="small">Perfumes</Typography>
              </ListItem>

            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
        open={nestedopen === 9}

      >
        <ListItem className="p-0" selected={nestedopen === 9}>
          <AccordionHeader
            onClick={() => handleNestedOpen(9)}
            className="border-b-0 p-3 focus:outline-none"
          >
            <ListItemPrefix>
              <FontAwesomeIcon icon={faAngleRight} size="1x" rotation={nestedopen===9? 90:0} className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" variant="h6" className="mr-auto font-normal">
              Kitchen 
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0 ml-4">
            <ListItem className="py-2">
              <ListItemPrefix>
                <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
              </ListItemPrefix>
              <Typography variant="small">Kitchen Towels</Typography>
            </ListItem>
            <ListItem className="py-2">
              <ListItemPrefix>
                <FontAwesomeIcon icon={faAngleRight} className="h-3 w-5" />
              </ListItemPrefix>
              <Typography variant="small">Kitchen Furniture</Typography>
            </ListItem>

          </List>
        </AccordionBody>
      </Accordion>
                </List>
              </AccordionBody>
            </Accordion>
          
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5" />
            </ListItemPrefix>
            Track My Order
          </ListItem>
          <ListItem>
          <ListItemPrefix>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

          </ListItemPrefix>
          Help and Support
        </ListItem>
          
            <ListItem>
              <ListItemPrefix>
                <FontAwesomeIcon icon={faUserGroup} className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FontAwesomeIcon icon={faPowerOff} className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>

        </Card>
      </Drawer>
    </div>

  );
}