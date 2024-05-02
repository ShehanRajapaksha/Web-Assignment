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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash  } from '@fortawesome/free-solid-svg-icons'
import CustomAlert from '../Components/CustomAlert';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate=useNavigate()

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
        try {
            // Post email and password to the server
            const response = await axios.post('https://8631-2402-4000-1202-c3d9-c8c1-5af9-236a-2bb1.ngrok-free.app/user', {
                email: values.email,
                password: values.password
            });
    
            if (response.status === 201) {
                // Redirect to "/"
                navigate("/");
            } else {
                console.error(response.status);
            }
    
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
        } finally {
            // Reset the form state
            resetForm()

        }
    };

    const { values, errors, isSubmitting, handleBlur, handleChange, handleSubmit,resetForm } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit,
    })

    return (
        <div className="container flex flex-col mx-auto bg-white rounded-lg my-5 mt-16">
        {/* TODO: Use alerts after connecting with backend with appropirate logic  */}
        {/*<CustomAlert msg={"Login success"}  type={2}/>*/}
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:p-12">
                    <Card className="w-96 shadow-xl border border-blue-gray-50 rounded-3xl py-10">
                        <Typography variant='h3' className="mb-3  font-bold text-center text-dark-grey-900 mt-6" textGradient>Login</Typography>
                        <p className="mb-4 text-center text-grey-700">Enter your email and password</p>
                        <form >
                            <CardBody className="flex flex-col gap-4">


                
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
                               

                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}
