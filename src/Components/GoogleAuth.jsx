import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export default function GoogleAuth(params) {
    const handleOnSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        //use token data to access data
        const decodedToken= jwtDecode(credentialResponse.credential)
        console.log(decodedToken.name);
        console.log(decodedToken);
        console.log(decodedToken.email);
    };    

    return(
        <div className=" hidden fixed top-0 right-0">
                
                {/* TODO: Complete the google login part with onsuccess data passing and failiure management*/ }
                <GoogleLogin
                    onSuccess={handleOnSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    
                    use_fedcm_for_prompt={false} //USE True  IN FUTURE WHEN COOKIE ISSUE ARISE
                    cancel_on_tap_outside={true}
                    useOneTap

                />;
                </div>
    )
}