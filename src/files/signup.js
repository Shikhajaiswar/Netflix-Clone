import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar(){
    return(
        <div className="flex flex-row justify-between  p-3 ring-offset-2 ring-2 ring-slate-200">
                <h1 className="text-red-600 text-6xl font-bold rounded">NETFLIX</h1>
                <button
                    type="button"
                    className=' text-gray-600 text-xl  font-medium py-5 px-5 rounded-md '
                >
                    Sign Out
                </button>

            </div>
    );

}


function Signup() {

    const navigate = useNavigate();
    const gotoPlans = () => {
        // console.log("sihdhfsidf");
        // Use navigate function to navigate to a different route
        navigate("/plans");
    };

    return (
        <div className=''>
            {/* <div className="flex flex-row justify-between  p-5 ring-offset-2 ring-2 ring-slate-200">
                <h1 className="text-red-600 text-5xl font-bold rounded">NETFLIX</h1>
                <button
                    type="button"
                    className=' text-gray-600 text-xl  font-medium py-5 px-5 rounded-md '
                >
                    Sign Out
                </button>

            </div> */}
            <NavBar/>
            <div>
                <div className="flex flex-col justify-center px-96 py-20">
                    <span class="stepLogo planStepLogo"></span>

                    <div className="flex flex-col pb-10  text-center ">
                        <span>Step 1 to 3</span>
                        <span className="text-4xl font-bold">Choose your plan.</span>
                    </div>
                    <div className="text-lg flex flex-col justify-center text text-center py-5">
                        <ul>
                            <li className="py-3">No commitments, cancel anytime.</li>
                            <li className="py-3">Everything on Netflix for one low price.</li>
                            <li className="py-3">No ads and no extra fees. Ever.</li>
                        </ul>
                    </div>

                    <button type="button" onClick={gotoPlans} className="bg-red-600 max-w-lg text-white text-2xl font-medium  py-5 px-2 flex  justify-center">
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}

export {Signup, NavBar};