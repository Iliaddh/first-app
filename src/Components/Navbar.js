import React from 'react';
import styles from "./Navbar.module.css"
import logo from "../images/Logo.png.png"
import index from "../Components/index.css";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div >
                <img src={logo} className={styles.logo} alt='Logo'/>
            </div>

            <div className= {styles.listContainer}>
                <ul className= {styles.list}>
                    <li>Mobile</li>
                    <li>Internet</li>
                    <li>Boxing week</li>
                </ul>

            </div>

            
        </header>
    );
};

export default Navbar;