import React, { useState } from 'react'
import axios from 'axios'
import { Input, Button, Typography } from '@material-tailwind/react'
import { Formik, useFormik } from 'formik'
import { SignUpSchema } from '../Schemas/SignUpSchema'
import ErrorForm from '../Components/ErrorForm'
import { useGoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'



export default function SignUp(params) {
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const onSubmit = async (values, formikBag,) => {
        try {
            // Post email and password to the server
            const response = await axios.post('https://8631-2402-4000-1202-c3d9-c8c1-5af9-236a-2bb1.ngrok-free.app/user', {
                email: values.email,
                password: values.password
            });
            if (!response.data) {
                throw new Error('Response data is empty');
            }
            console.log(response.data); // Log the response from the server
            resetForm()
            navigate("/")

           
            
        } catch (error) {
            console.error(error); // Log any errors that occur
            formikBag.setSubmitting(false); // Set form submission to false in case of error
        }
    }

    const login = useGoogleLogin({
        onSuccess: codeResponse => {
            // Handle the successful login here
            console.log('Login successful:', codeResponse);
        },
        flow: 'auth-code',
    });


    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting, resetForm } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
        },
        validationSchema: SignUpSchema,
        onSubmit,
    })


    return (
        <div>
            {/* TODO: Use alerts after connecting with backend with appropirate logic  */}
            {/*<CustomAlert msg={"Login success"}  type={2}/>*/}
            <section className="px-4 pt-16 mx-auto max-w-7xl">

                <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5 mt-8">
                    <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">Create your  Account</h1>
                    <p className="my-2 text-xs font-normal text-center text-gray-700 md:text-base">
                        Already have an account?
                        <a href="/Login" className=" text-Red1 hover:text-Red2"> Sign in</a>
                    </p>
                    <div className="flex items-center mb-3 ">
                        <hr className="h-0 border-b border-solid ml-6 border-gray-300 grow" />
                        <p className="mx-4 text-grey-600">OR</p>
                        <hr className="h-0 border-b border-solid mr-6 border-gray-300 grow" />
                    </div>
                    <form className='flex flex-col gap-4 my-3'>

                        <Input

                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Name"
                            id='name'
                            size="lg"
                            error={errors.name && touched.name}
                            autoComplete='name'
                        />

                        <Input
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Email"
                            id='email'
                            size="lg"
                            autoComplete='email'
                            error={errors.email && touched.email}
                        />
                        <div>
                            <div
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(false)}
                            >
                                <Input
                                    value={values.password}
                                    onBlur={handleBlur}

                                    onChange={handleChange}
                                    label="Password"
                                    id='password'
                                    size="lg"
                                    type={showPassword ? "text" : "password"}
                                    error={errors.password && touched.password}
                                    icon={
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={togglePasswordVisibility} style={{ color: "black", cursor: "pointer" }} />
                                    }


                                />
                            </div>
                            {passwordFocused && (
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="mt-2 ml-2 flex items-center gap-1 font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="-mt-px h-4 w-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Use at least 8 characters, one uppercase, one lowercase and one number.
                                </Typography>)}
                        </div>


                        <Input
                            value={values.confirmpassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Confirm Password"
                            id='confirmpassword'
                            size="lg"
                            type='password'
                            error={errors.confirmpassword && touched.confirmpassword && values.password}
                        />
                        {errors.confirmpassword && touched.confirmpassword && values.password && (
                            <div className=' -mt-3'>
                                <ErrorForm msg={errors.confirmpassword} />
                            </div>
                        )}
                        <Button className="rounded-full h-12  bg-Red1 mt-4 px-4 focus:outline-none" onClick={handleSubmit} loading={isSubmitting} fullWidth>
                            SignUp
                        </Button>
                    </form>


                    <p className="my-5 text-xs font-medium text-center text-gray-700">
                        By clicking "Sign Up" you agree to our
                        <a href="#" className="text-Red1 hover:text-Red2"> Terms of Service </a>
                        and
                        <a href="#" className="text-Red1 hover:text-Red2"> Privacy Policy</a>.
                    </p>


                </div>
            </section>
        </div>
    )
}