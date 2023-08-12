import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./signup";
import * as img from "../img/image";

function Payment() {
  const navigate = useNavigate();
  const gotoHome = () => {
    // console.log("sihdhfsidf");
    // Use navigate function to navigate to a different route
    navigate("/Home");
  };
  return (
    <>
      <NavBar />
      <div>
        <div>
          <div className="my-10 flex justify-center items-center">
            <div className="max-w-md p-6  rounded-md text-center text-stone-700">
              <h2 className="text-sm  mb-6">STEP 3 OF 3</h2>
              <p className="text-3xl font-bold mb-4">Choose how to pay</p>
              <p className="text-lg mb-4">
                Your payment is encrypted and you can change your payment method
                at anytime.
              </p>
              <p className="text-lg mb-4">Secure for peace of mind.</p>
              <p className="text-lg mb-6">Cancel easily online.</p>
              {/* Add your payment method selection elements here */}
            </div>
          </div>

          <div className="flex justify-center items-center mb-5">
            <div className="max-w-md p-3 bg-white rounded-md  flex items-center justify-center mt-0 border-2 border-gray-300">
              <h2 className="text-xl mb-4">UPI Autopay</h2>
              <div className="flex items-center px-5">
                <img src={img.bhim} alt="BHIM" className="h-6 px-1" />
                <img src={img.paytm} alt="Paytm" className="h-6 px-1" />
                <img src={img.gpay} alt="Google Pay" className="h-6 px-1" />
              </div>
              <div className="ml-auto text-3xl ml-20">&gt;</div>
            </div>
          </div>

          <div className="flex justify-center items-center mb-20">
            <div className="max-w-md p-3 bg-white rounded-md  flex items-center justify-center mt-0 border-2 border-gray-300">
              <h2 className="text-xl mb-4">Creadit Card</h2>
              <div className="flex items-center px-5">
                <img src={img.bhim} alt="BHIM" className="h-6 px-1" />
                <img src={img.paytm} alt="Paytm" className="h-6 px-1" />
                <img src={img.gpay} alt="Google Pay" className="h-6 px-1" />
              </div>
              <div className="ml-auto text-3xl ml-20">&gt;</div>
            </div>
          </div>


          <div className="flex justify-center items-center p-5 m-10">
            <button
              type="button"
              onClick={gotoHome}
              className="bg-red-600 text-white text-2xl font-medium py-4 px-20 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
