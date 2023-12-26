import React, { Component } from 'react';
import styles from "../Components/Cards.module.css";
import Card from "./Card.js"
import iphone14 from "../images/apple14.png";
import iphone15 from "../images/apple15Green.png";
import iphone15ProMax from "../images/apple15Pro-max.png";
import iphone15Black from "../images/iPhone15Black.png";
import styled from 'styled-components';

const MyDiv1 = styled.div`
display: flex;
justify-content: space-around;
margin: 60px;
float: right;
width: 80%;
@media (max-width: 1200px){
    display: block;
    padding: 20px

}
`

class Cards extends Component {
    render() {
        return (
            <>
            <MyDiv1>
                <Card image={iphone14} oldCost="30.00" newCost = "20.00" name= "Iphone 14"/>
                <Card image={iphone15} oldCost="30.00" newCost = "20.00" name= "Iphone 15"/>
                <Card image={iphone15ProMax} oldCost="42.50" newCost = "32.50" name= "Iphone 15 Pro Max"/>
                <Card image={iphone15Black} oldCost="34.00" newCost = "24.00" name= "Iphone 15 Plus"/>
            </MyDiv1>
            </>
        );
    }
}

export default Cards;