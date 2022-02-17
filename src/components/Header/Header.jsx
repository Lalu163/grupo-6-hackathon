import React from 'react';
import HelPet from "../../assets/logo/HelPet.png"
import styles from "./Header.module.css"
function Header(){
    return(
        <div className="header">
            <div className={styles.header}>
            <img src={HelPet} className="image-logo"></img>
            </div>
        </div>
    );
}

export default Header;