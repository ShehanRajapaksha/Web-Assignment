import React, { createContext, useContext } from 'react';

const UtilityContext = createContext();

export const useUtility = () => useContext(UtilityContext);

export const UtilityProvider = ({ children }) => {
    const [isSmall, setIsSmall] = React.useState(null);
    const [openCart, setOpenCart] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 768);
        };

        // Add event listener for resize event
        window.addEventListener("resize", handleResize);

        // Call handleResize initially to set isSmall based on the initial window size
        handleResize();

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    React.useEffect(() => {
       ;
    }, [isSmall]);

    const updateOpenCart = (value) => {
      setOpenCart(value);
    };

    return (
        <UtilityContext.Provider value={{ isSmall, openCart, updateOpenCart }}>
            {children}
        </UtilityContext.Provider>
    );
};

