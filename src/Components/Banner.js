import styles2 from "../Components/Banner.module.css";
import banner from "../images/Landing.png"

import React from 'react';

const Banner = () => {
    return (
        <>
       
        <img src={banner} alt="banner" className={styles2.container}/>
        <div className={styles2.textContainer} >
             <h1>Rogers</h1>
             <p>
                Welcome to Rogers Wireless website
             </p>
        </div>
        </>
    );
};

export default Banner;