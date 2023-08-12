import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./signup";

const Card = () => {
  return (
    <div className=" bg-sky-200 w-72 p-5 rounded-xl">
      <div className=" bg-sky-600 shadow-md rounded-md p-4 text-white">
        <div className="text-xl font-bold mb-1">Premium</div>
        <div className="text-xl font-bold mb-1">4K + HDR</div>
      </div>
      <div>
        <div className="bg-gray-100 rounded-md p-2">
          <div className="m-3 border-zinc-950">
            <h1>Monthly Price</h1>
            <p className="text-gray-600">$69</p>
            <hr />
          </div>
          <div className="m-3 border-zinc-950">
            <h1>Resolution</h1>
            <p className="text-gray-600">4K (Ultra HD) + HDR</p>
            <hr />
          </div>
          <div className="m-3 border-zinc-950">
            <h1>Video Quality</h1>
            <p className="text-gray-600">Best</p>
            <hr />
          </div>
          <div className="m-3 border-zinc-950">
            <h1>Supported devices</h1>
            <p className="text-gray-600">TV, computer, mobile phone, tablet</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

const Plans = () => {
  const navigate = useNavigate();
  const gotoPayment = () => {
    // console.log("sihdhfsidf");
    // Use navigate function to navigate to a different route
    navigate("/paymentPicker");
  };
  return (
    <>
      <NavBar />
      <div>
        <div>
          <div className="flex flex-col justify-center p-10">
            <span>Step 1 to 3</span>
            <h1 className=" text-neutral-700 text-3xl font-bold">
              Choose the plan that’s right for you
            </h1>
          </div>

          <div className="flex flex-row mx-5 my-10">
            <div className="mr-4 transition-transform transform hover:scale-105">
              <Card />
            </div>
            <div className="mr-4 transition-transform transform hover:scale-105">
              <Card />
            </div>
            <div className="mr-4 transition-transform transform hover:scale-105">
              <Card />
            </div>
            <div className="mr-4 transition-transform transform hover:scale-105">
              <Card />
            </div>
          </div>

          <div className="flex justify-center items-center p-5 m-10">
            <button
              type="button"
              onClick={gotoPayment}
              className="bg-red-600 text-white text-2xl font-medium py-4 px-20 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Plans, Card };
