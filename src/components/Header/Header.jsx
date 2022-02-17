import React,{useState} from 'react';
import HelPet from "../../assets/logo/HelPet.png"
import menu from "../../assets/icons/menu.png"
import styles from "./Header.module.css"
import Navbar from "../Navbar/Navbar"
import {Link} from "react-router-dom"
function Header(){
    const [show, setShow]=useState(false)
    return(
        <div className="header">
            {show?<Navbar/>:null}
            <div className={styles.header}>
            <Link to="/"><img src={HelPet} className={styles.logo} ></img></Link>
            <img src={menu} className={styles.menu} onClick={()=>setShow(!show)}></img>
            </div>
        </div>
    );
}

export default Header;