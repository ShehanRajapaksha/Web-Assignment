import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-8">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#E12E02"
                    className="w-20 h-20 mx-auto"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                        clip-rule="evenodd"
                    />
                </svg>
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mt-10 text-3xl leading-snug md:text-4xl"
                >
                    Error 404 <br /> It looks like something went wrong.
                </Typography>
                <Typography className="mt-8 mb-14 text-18 font-normal text-gray-500 mx-auto md:max-w-sm">
                    Don&apos;t worry, our team is already on it. Please try refreshing the
                    page or come back later.
                </Typography>
                <Link to="/">
                    <Button className="rounded-full h-12  bg-Red1 mt-2 px-4  focus:outline-none" fullWidth>
                        Back home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
