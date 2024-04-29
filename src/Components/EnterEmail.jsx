import React from "react";

const EnterEmail = () => {
  return (
    <footer className="pt-16 pb-16 mx-8 my-8 rounded-md bg-black1 bg-cover bg-center" style={{ backgroundImage: `url('https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.webp?b=1&s=170667a&w=0&k=20&c=O39_wq7HB2oZHV3pyeZDxFAq0Xb_zNvLKrAIEWDVveY=')` }}>
      <div className="container mx-auto gap-3">
        <div className="text-center text-whiteshade1">
          <h2 className="h2 uppercase mb-6 font-semibold">Subscribe to our newsletter</h2>
          <p className="text-white/70 pb-4"> Be the first to get the latest news about trends, promotions and much more!</p>
        </div>

        {/* form */}
        <form className="flex justify-center mx-auto gap-3"> 
          <input
            type='text'
            id="email"
            placeholder="Your email address"
            className="input text-white font-bold py-2 px-4 rounded focus:outline-none" // Removed mx-auto here
          />
          <button className="transition-colors duration-300 ease-in-out shadow-none active:scale-100 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none">Join</button>
        </form>
      </div>
    </footer>
  )
};

export default EnterEmail;
