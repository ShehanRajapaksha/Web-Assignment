import React, { useEffect, useState } from 'react';
import { Alert } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function CustomAlert({ msg, type }) {
    // Types as follows:
    //     0-success
    //     1-warnings
    //     2-Errors

    let bgColor, borderColor, textColor, icon;

    if (type === 0) {
        bgColor = 'bg-[#2ec946]/10';
        borderColor = 'border-[#2ec946]';
        textColor = 'text-[#2ec946]';
        icon = faCircleCheck;
    } else if (type === 1) {
        bgColor = 'bg-yellow-200';
        borderColor = 'border-yellow-400';
        textColor = 'text-yellow-800';
        icon = faTriangleExclamation;
    } else if (type === 2) {
        bgColor = 'bg-red-200';
        borderColor = 'border-red-400';
        textColor = 'text-red-800';
        icon = faCircleExclamation;
    }

    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMounted(false); // Unmount the component
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {mounted && (
                <div className='fixed top-0 left-0 w-full flex justify-center z-30 -mt-20'>
                    <Alert
                        icon={<FontAwesomeIcon icon={icon} />}
                        className={`rounded-none w-2/3 border-l-4 font-medium ${borderColor} ${bgColor} ${textColor}`}
                        animate={{
                            mount: { y: 100 },
                            unmount: { y: 0 }
                        }}
                    >
                        {msg}
                    </Alert>
                </div>
            )}
        </>
    );
}
