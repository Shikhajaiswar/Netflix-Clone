// import React from "react";
import React, { useRef, useState } from "react";
import "../index.css";
import vedio from "../img/teasure.mp4";
import { useNavigate } from "react-router-dom";
import * as img from "../img/image";
import { data } from "../movie/mockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Footer } from "./landingPage";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-black text-white p-3 flex justify-between items-center">
      <div className="flex  items-center mb-2">
        <h1 className="text-red-600 text-3xl font-bold rounded">NETFLIX</h1>
        <ul className="flex space-x-2 pl-10">
          <li className=" font-normal px-1 text-lg">Home</li>
          <li className=" font-normal px-1 text-lg">Series</li>
          <li className=" font-normal px-1 text-lg">Movies</li>
          <li className=" font-normal px-1 text-lg">My list</li>
          <li className=" font-normal px-1 text-lg">Downloads</li>
        </ul>
      </div>
      <div>
        <button className="text-white px-3 py-2 bg-red-600 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

const BG = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${img.back})`, height: "30rem" }}
      >
        <div className="absolute bottom-20 left-16 flex space-x-4">
          {isPlaying ? (
            <button
              className="bg-white text-black px-4 py-2 flex items-center"
              onClick={handlePause}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="black"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 4H6v16h4V4zM18 4h-4v16h4V4z"
                />
              </svg>
              Pause
            </button>
          ) : (
            <button
              className="bg-white text-black px-4 py-2 flex items-center"
              onClick={handlePlay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="black"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3l14 9-14 9V3z"
                />
              </svg>
              Play
            </button>
          )}
          <button className="bg-gray-500 bg-opacity-75 text-white px-4 py-2 flex items-center">
            More Info
          </button>
        </div>

        {isPlaying && (
          <video
            className="w-full h-full object-cover"
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={vedio} type="video/mp4" />
          </video>
        )}

      </div>
    </div>
  );
};




const Movies = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="bg-black text-white py-8">
      <h1 className="text-2xl mb-4 px-5">{props.title}</h1>
      <div className=" flex items-center">
        {/* <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} /> */}
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <img
              className="w-[230px] h-[150px] rounded-xl inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        {/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} /> */}
      </div>
    </div>
  );
};

// export default Movies;

function Home() {
  return (
    <>
      <Navbar />
      <BG />
      <Movies title="Trending Shows" />
      <Movies title="Hollywood Shows" />
      <Movies title="Romantic Shows" />
      <Movies title="Trillers Shows" />
      <Movies title="Bollywood Shows" />
      <Footer />
    </>
  );
}

export default Home;
