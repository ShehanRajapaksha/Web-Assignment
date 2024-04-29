import React, { useState } from 'react';
import { ListItem } from '@material-tailwind/react';

export default function FilterListItem({ type }) {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
    };

    return (
        <ListItem ripple={false} className={`focus:bg-white -mb-4`} onClick={handleClick}>
            <div className="relative inline-block w-5 mr-2 align-middle select-none transition duration-200 ease-in -mt-4">
                <input
                    type="checkbox"
                    className="absolute opacity-0 h-0 w-0"
                    checked={checked}
                    onChange={() => {}}
                />
                <div
                    className={`absolute h-4 w-4 border border-gray-500 rounded-md ml-1`}
                    
                >
                    {checked && (
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13" height="13" viewBox="0 0 26 26">
<path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z"></path>
</svg>
                    )}
                </div>
            </div>
            {type}
        </ListItem>
    );
}
