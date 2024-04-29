import * as yup from 'yup'

export const CheckoutSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid Email").required("Email is required"),
    fname:yup.string().required("First name is required"),
    lname:yup.string().required("Last name is required"),
    address:yup.string().required("Address is required"),
    billingCity:yup.string().required("City is required"),
    billingZip:yup.number("Enter valid Zip").integer("Enter valid Zip").positive("Enter valid Zip").required("Zip is required").typeError("Enter Valid Zip number"),
    phone:yup.string().matches(/^\d{3}\d{3}\d{4}$/,{message:"Please enter valid phone number"}).required("Phone number is required")
})