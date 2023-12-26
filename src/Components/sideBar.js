import styles from "./sideBar.module.css";
import Filter from "./filter.js";


import React, { Component } from 'react';

class sideBar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p style={{fontWeight:"bold"}}>FILTER BY (0)</p>
                <br></br>
                <br></br>
                <p style={{fontWeight:"bold"}}>DEVCE CONDITION</p>
                <br></br>
                <Filter phoneModel="New"></Filter>
                <br></br>
                <hr></hr>
                <br></br>
                <Filter phoneModel="Certified Pre-owned (12)"></Filter>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <p style={{fontWeight:"bold", height:"0"}}>MANUFACTURER</p>
                <br></br>
                <Filter phoneModel="Samsung"></Filter>
                <br></br>
                <hr></hr>
                <br></br>
                <Filter phoneModel="Apple"></Filter>
                <br></br>
                <hr></hr>
                <br></br>
                <Filter phoneModel="Motorola"></Filter>
                <br></br>
                <hr></hr>
                <br></br>
                <Filter phoneModel="Google"></Filter>
                <br></br>
                <hr></hr>
                <br></br>
                <Filter phoneModel="TCL"></Filter>
                <button style={{backgroundColor:"#fff", border:"1px solid red", padding:"13px", margin:"50px 20px", borderRadius:"10px", color:"red", cursor:"pointer"}}>Reset all filters</button>
            </div>
        );
    }
}

export default sideBar;