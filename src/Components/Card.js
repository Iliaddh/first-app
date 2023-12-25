import React, { Component } from 'react';
import styles from "../Components/Card.module.css";


class Card extends Component {
    render() {
        const{image, oldCost, name, newCost} = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.offerContainer}><p className={styles.offer}>SPECIAL OFFER</p></div>
                <div style={{display: "flex", justifyContent: "center"}}><img src={image} alt='Product'></img></div>
                <div><h3>{name}</h3></div>
                <div className={styles.down}>
                    <p style={{display: "flex", justifyContent: "center", fontSize: "30px"}}>$0.00</p>
                    <p>down</p>
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: "20px", textAlign: "center"}}>
                    <p className={styles.oldPrice}>${oldCost}</p>
                    <p className={styles.newPrice}>${newCost}/mo</p>
                    
                </div>
                <div style={{justifyContent: "center", display: "block", margin:"8px 12px"}}>
                    <p style={{justifyContent:"center"}}>(After bill credit) on financing with </p>
                    <br></br>
                    <p style={{justifyContent:"center", color:"black", fontSize:"20px" , fontWeight:"bold"}}>Upfront Edge</p>
                    <br></br>
                    <p style={{fontSize:"13px", color:"gray"}}>Taxes Extra|24 mos|0% APR</p>
                    <p style={{fontSize:"15px", color:"909090"}}>Full price: $1,605.00</p>
                    <div style={{display: "flex", justifyContent: "center", marginTop:"60px"}}>
                        <button className={styles.viewDetails}>View details</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;