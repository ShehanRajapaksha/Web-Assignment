import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { useGoogleLogin } from '@react-oauth/google';
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash,  } from '@fortawesome/free-solid-svg-icons'
import CustomAlert from '../Components/CustomAlert';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const login = useGoogleLogin({
        onSuccess: codeResponse => {
            // Handle the successful login here
            console.log('Login successful:', codeResponse);
        },
        flow: 'auth-code',
    });


    const onSubmit = async (values, formikBag) => {
        formikBag.setSubmitting(false);
        console.log(values);

    }

    const { values, errors, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit,
    })

    return (
        <div className="container flex flex-col mx-auto bg-white rounded-lg my-5">
        {/* TODO: Use alerts after connecting with backend with appropirate logic  */}
        {/*<CustomAlert msg={"Login success"}  type={2}/>*/}
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:p-12">
                    <Card className="w-96 shadow-xl border border-blue-gray-50 rounded-3xl">
                        <Typography variant='h3' className="mb-3  font-bold text-center text-dark-grey-900 mt-6" textGradient>Login</Typography>
                        <p className="mb-4 text-center text-grey-700">Enter your email and password</p>
                        <form >
                            <CardBody className="flex flex-col gap-4">


                                {/* TODO: Use formik*/}
                                <div>
                                    <Input
                                        label="Email"
                                        id='email'
                                        size="lg"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={errors.email && isSubmitted}
                                    />
                                    {console.log(isSubmitted)}
                                </div>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    label="Password"
                                    id='password'
                                    size="lg"
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={errors.password && isSubmitted}
                                    icon={
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={togglePasswordVisibility} style={{ color: "black", cursor: "pointer" }} />
                                    }
                                />

                                <div className="-ml-2.5">
                                    <Checkbox label="Remember Me" />
                                </div>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button className="rounded-full h-12 bg-Red1 mt-2 px-4 focus:outline-none"
                                    onClick={() => {
                                        handleSubmit();
                                        setIsSubmitted(true);
                                    }
                                    }
                                    fullWidth
                                    loading={isSubmitting}
                                >
                                    Login
                                </Button>

                                <Typography variant="small" className="mt-6 flex justify-center">
                                    Don&apos;t have an account?
                                    <Typography
                                        as="a"
                                        href="/Signup"
                                        variant="small"
                                        color="blue-gray"
                                        className="ml-1 font-bold hover:text-Red1"

                                    >
                                        Sign up
                                    </Typography>
                                </Typography>
                                <div className="flex items-center mb-3 mt-6">
                                    <hr className="h-0 border-b border-solid ml-6 border-gray-300 grow" />
                                    <p className="mx-4 text-grey-600">or</p>
                                    <hr className="h-0 border-b border-solid mr-6 border-gray-300 grow" />
                                </div>
                                <button className="flex items-center justify-center cursor-pointer w-full py-4  text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400  focus:ring-grey-300" onClick={login}>
                                    <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
                                    Sign in with Google
                                </button>
                                {/*use later- sign in with apple*/}
                                {/*<button className="flex items-center justify-center cursor-pointer w-full py-4  text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                                    <img className="h-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
                                    Sign in with Apple
                                </button>*/}

                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}
