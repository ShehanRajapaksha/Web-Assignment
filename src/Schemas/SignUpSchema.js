import * as yup from 'yup';

const passwordString = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;


export const SignUpSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Enter valid email").required("Email is Required"),
    password: yup.string().min(8, 'Password must be at least 8 characters')
        .matches(passwordString, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        .required('Password is required'),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("Password is required")
});