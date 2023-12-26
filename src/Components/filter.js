import styles from "./filter.module.css";

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const myDiv= styled.div`
margin-left: 20px;
@media(max-width:600px){
    
        
            display: flex;
            padding: 60px;
            margin: 0px 0px;
            float: left;
    
    

   
}

`

const MyLabel = styled.label`
@media(max-width:600px){
    
        
    display: flex;
    padding: 10px;
    margin: 0px 0px;
    float: left;




}

`

class filter extends PureComponent {
    render() {
        const {phoneModel, quantity} = this.props;
        return (
            
            <myDiv>
                <input type="checkbox" style={{width: "20px", height:"20px"}}/>
                <MyLabel>{phoneModel}</MyLabel>
            </myDiv>
           
        );
    }
}



export default filter;