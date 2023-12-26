import React, {Component} from "react";
import Navbar from "./Components/Navbar.js";
import  Banner from "./Components/Banner.js";
import Cards from "./Components/Cards.js"
import Card from "./Components/Card.js"
import index from "./Components/index.css";
import Filter from "./Components/filter.js"
import SideBar from "./Components/sideBar.js"
import styled from "styled-components";

const MyDiv = styled.div`
width: 936px;
height: 120px;
margin-left: 280px;
box-shadow: 5px 5px 10px rgb(189, 189, 189);
border-radius: 10px;
padding: 10px;

`

const MyBtn = styled.button`
float:right;
margin-right:30px;
margin-bottom:50px;
color: white;
background-color: red;
width: 115px;
height: 48px;
border-style: none;
border-radius: 7px;
font-size:16px;
top:0;

`


class App extends Component{
 
  render(){
    return(
    
      
      <div className={index.container}>
        
        <Navbar/>
        <p style={{fontWeight:"bold", margin:"70px 20px", fontSize:"40px"}}>Phones</p>
        <MyDiv>
          <p style={{marginTop:"30px", fontFamily:"fantasy"}}>Already a Rogers customer?</p>
          <br></br>
          <p style={{width:"400px"}}>Log in to see special personalized pricing and offers</p>
          <MyBtn>Sign in</MyBtn>

        </MyDiv>
        <Cards/>
        <SideBar></SideBar>
        
        
      </div>
      
    )
  }
}

export default App;
