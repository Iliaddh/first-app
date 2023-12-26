import React, { Component } from 'react';
import styles from "../Components/Card.module.css";

import styled from 'styled-components';

const MyDiv1 = styled.div`

display : block;
justify-content: center;
margin: 8px 12px;

`

const MyDiv2 = styled.div`

display : flex;
justify-content: center;
margin-top: 60px;

`

const MyDiv3 = styled.div`

display : flex;
justify-content: center;
margin-top: 20px;
text-align : center;

`

const MyP1 = styled.p`
display : flex;
justify-content: center;
font-size: 30px;

`
const MyP2 = styled.p`
justify-content : center;
color: black;
fonr-size: 20px;
font-weight: bold;
`



class Card extends Component {
    render() {
        const{image, oldCost, name, newCost} = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.offerContainer}><p className={styles.offer}>SPECIAL OFFER</p></div>
                <div style={{display: "flex", justifyContent: "center"}}><img src={image} alt='Product'></img></div>
                <div><h3>{name}</h3></div>
                <div className={styles.down}>
                    <MyP1>$0.00</MyP1>
                    <p>down</p>
                </div>
                <MyDiv3>
                    <p className={styles.oldPrice}>${oldCost}</p>
                    <p className={styles.newPrice}>${newCost}/mo</p>
                </MyDiv3>
                <MyDiv1>
                    <p style={{justifyContent:"center"}}>(After bill credit) on financing with </p>
                    <br></br>
                    <MyP2>Upfront Edge</MyP2>
                    <br></br>
                    <p style={{fontSize:"13px", color:"gray"}}>Taxes Extra|24 mos|0% APR</p>
                    <p style={{fontSize:"15px", color:"909090"}}>Full price: $1,605.00</p>
                    <MyDiv2>
                         <button className={styles.viewDetails}>View details</button>
                    </MyDiv2>
                </MyDiv1>
                <div>HELLELPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP</div>
            </div>
        );
    }
}

export default Card;