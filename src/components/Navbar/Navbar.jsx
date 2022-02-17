import React from 'react';
import styles from "./Navbar.module.css"
function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li>Veterinaria</li>
                <li>Paseadores</li>
                <li>Grooming</li>
                <li>Foro</li>
            </ul>
        </div>
    );
}

export default Navbar;