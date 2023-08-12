import React from "react";
import { Cards1, Cards2, Head, FAQ, Footer } from './landingPage';
import * as img from '../img/image';



const Land = () => {
    return(
        <>
        <Head />
         <Cards1
          src={img.img1}
          alt="image"
          headContent="Enjoy on your TV"
          descContent="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        />
        <Cards2
          src={img.img2}
          alt="image"
          headContent="Create profiles for kids"
          descContent="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        />
        <Cards1
          src={img.img3}
          alt="image"
          headContent="Watch everywhere"
          descContent="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <Cards2
          src={img.img4}
          alt="image"
          headContent="Download your shows to watch offline"
          descContent="Save your favourites easily and always have something to watch."
        />
        <div className="line"></div>
        <FAQ />
        <div className="line"></div>
        <Footer />

        </>
    )
}

export default Land;