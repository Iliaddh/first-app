import React, {Component} from "react";
import Navbar from "./Components/Navbar.js";
import  Banner from "./Components/Banner.js";
import Cards from "./Components/Cards.js"
import Card from "./Components/Card.js"
import index from "./Components/index.css";
import Filter from "./Components/filter.js"
import SideBar from "./Components/sideBar.js"


class App extends Component{
 
  render(){
    return(
    
      
      <div className={index.container}>
        
        <Navbar/>
        <p style={{fontWeight:"bold", margin:"70px 20px", fontSize:"40px"}}>Phones</p>
        <Cards/>
        <SideBar></SideBar>
        
        
        <p>HELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      </div>
      
    )
  }
}

export default App;
