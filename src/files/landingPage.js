import React, { useState } from "react";
import "../index.css";
import * as img from "../img/image.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Cards1(props) {
  return (
    <div className="cards">
      <div className="line"></div>
      <div className="Card">
        <div className="card-content mini-cart">
          <h1 className="card-content-head ">{props.headContent}</h1>
          <p>{props.descContent}</p>
        </div>
        <div className="img img-container mini-cart">
          <img src={props.src} alt="Description of the image" />;
        </div>
      </div>
    </div>
  );
}

function Cards2(props) {
  return (
    <div className="cards">
      <div className="line"></div>
      <div className="Card">
        <div className="img img-container mini-cart">
          <img src={props.src} alt="Description of the image" />
        </div>
        <div className="card-content mini-cart">
          <h1 className="card-content-head ">{props.headContent}</h1>
          <p>{props.descContent}</p>
        </div>
      </div>
    </div>
  );
}

function Head() {

  const navigate = useNavigate();
  const handleClick = () => {
    // Use navigate function to navigate to a different route
    navigate("/signup");
  };

  return (
    <div className="root text-white ">
      <nav className="nav">
        <h1 className="text-red-600 text-5xl font-bold rounded">NETFLIX</h1>
        <button className="btn-sign-in">Sign In</button>
      </nav>
      <div className="main">
        <div className="main-titles">
          <h1 className="main-subtitles">
            <b>Binge Bliss: Unforgettable Journeys</b>
          </h1>
          <h2 className="main-subtitles1">
            <b>Uniting Stories, Boundless Entertainment</b>
          </h2>
        </div>
        <div className="cont">
          <button
            type="button"
            onClick={handleClick}
            className="bg-red-700 text-white text-2xl  font-bold py-5 px-5 rounded-md "
          >
            Finish Sign Up >
          </button>
          <br />
          <p id="validation-text"></p>
        </div>
      </div>
    </div>
  );
}

//the footer part
// import React, { useState } from 'react';

const FAQ = () => {
  const [visibleButton, setVisibleButton] = useState(null);

  const makeInvisible = (btnId) => {
    if (visibleButton === btnId) {
      setVisibleButton(null);
    } else {
      setVisibleButton(btnId);
    }
  };

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-center py-14  px-36">
        <div className="text-center text-5xl font-bold pb-10">
          Frequently Asked Questions
        </div>

        <div className="">
          <ul>
            <li className="bg-stone-800 my-5">
              <h3>
                <button
                  onClick={() => makeInvisible(1)}
                  className="flex justify-between py-6 px-5"
                >
                  <span className="text-2xl ">What is Netflix?</span>
                  <svg
                    className="fill-white"
                    viewBox="0 0 12 12"
                    width="33"
                    height="33"
                  >
                    <path d="M11 5H7V1A1 1 0 0 0 5 1V5H1A1 1 0 0 0 1 7H5v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2z" />
                  </svg>
                </button>
              </h3>
              {visibleButton === 1 && (
                <div className="bg-stone-700 p-7 text-xl transition-all duration-300 ease-in-out">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad – all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </div>
              )}
            </li>

            <li className="bg-stone-800 my-5">
              <h3>
                <button
                  onClick={() => makeInvisible(2)}
                  className="flex justify-between py-6 px-5"
                >
                  <span className="text-2xl ">How much does Netflix code?</span>
                  <svg
                    className="fill-white"
                    viewBox="0 0 12 12"
                    width="33"
                    height="33"
                  >
                    <path d="M11 5H7V1A1 1 0 0 0 5 1V5H1A1 1 0 0 0 1 7H5v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2z" />
                  </svg>
                </button>
              </h3>
              {visibleButton === 2 && (
                <div className="bg-stone-700 p-7 text-xl transition-all duration-300 ease-in-out">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 649 to ₹ 149 a month. No extra costs, no contracts.
                </div>
              )}
            </li>

            <li className="bg-stone-800 my-5">
              <h3>
                <button
                  onClick={() => makeInvisible(3)}
                  className="flex justify-between py-6 px-5"
                >
                  <span className="text-2xl ">Where can I watch Netflix?</span>
                  <svg
                    className="fill-white"
                    viewBox="0 0 12 12"
                    width="33"
                    height="33"
                  >
                    <path d="M11 5H7V1A1 1 0 0 0 5 1V5H1A1 1 0 0 0 1 7H5v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2z" />
                  </svg>
                </button>
              </h3>
              {visibleButton === 3 && (
                <div className="bg-stone-700 p-7 text-xl transition-all duration-300 ease-in-out">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. You can also
                  download your favourite shows with the iOS, Android, or
                  Windows 10 app. Use downloads to watch while you're on the go
                  and without an internet connection. Take Netflix with you
                  anywhere.
                </div>
              )}
            </li>

            <li className="bg-stone-800 my-5">
              <h3>
                <button
                  onClick={() => makeInvisible(4)}
                  className="flex justify-between py-6 px-5"
                >
                  <span className="text-2xl ">How do I cancel?</span>
                  <svg
                    className="fill-white"
                    viewBox="0 0 12 12"
                    width="33"
                    height="33"
                  >
                    <path d="M11 5H7V1A1 1 0 0 0 5 1V5H1A1 1 0 0 0 1 7H5v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2z" />
                  </svg>
                </button>
              </h3>
              {visibleButton === 4 && (
                <div className="bg-stone-700 p-7 text-xl transition-all duration-300 ease-in-out">
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </div>
              )}
            </li>

            <li className="bg-stone-800 my-5">
              <h3>
                <button
                  onClick={() => makeInvisible(5)}
                  className="flex justify-between py-6 px-5"
                >
                  <span className="text-2xl ">
                    What can I watch on Netflix?
                  </span>
                  <svg
                    className="fill-white"
                    viewBox="0 0 12 12"
                    width="33"
                    height="33"
                  >
                    <path d="M11 5H7V1A1 1 0 0 0 5 1V5H1A1 1 0 0 0 1 7H5v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2z" />
                  </svg>
                </button>
              </h3>
              {visibleButton === 5 && (
                <div className="bg-stone-700 p-7 text-xl transition-all duration-300 ease-in-out">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </div>
              )}
            </li>
            {/* Add more buttons and corresponding content as needed */}
          </ul>
        </div>

        <button className="bg-red-700 w-1/5 text-2xl font-medium  py-5 px-2 flex justify-center">
          Finish Sign Up
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-center py-14  px-36">
        <div className="pb-10">Questions? Call 000-800-919-1694</div>

        <div className="">
          <ul className=" grid grid-rows-4 grid-flow-col gap-3">
            <li>FAQ</li>
            <li>Media Centre</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>
            <li>Help Centre</li>
            <li>Investor Relations</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
            <li>Account</li>
            <li>Job</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </ul>
        </div>

        <div className="pt-10">Netflix India</div>
      </div>
    </div>
  );
};

export { Cards1, Cards2, Head, FAQ, Footer };
