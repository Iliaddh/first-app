import styles from "./filter.module.css";

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class filter extends PureComponent {
    render() {
        const {phoneModel, quantity} = this.props;
        return (
            
            <div style={{marginLeft:"20px", }}>
                <input type="checkbox" style={{width: "20px", height:"20px"}}/>
                <label style={{marginLeft:"9px"}}>{phoneModel}</label>
            </div>
           
        );
    }
}



export default filter;