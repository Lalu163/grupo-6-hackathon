import AnimalCare from "../../assets/icons/animal-care.png";
import Food from "../../assets/icons/dog-food.png";
import Night from "../../assets/icons/moon.png";
import PetCare from "../../assets/icons/pet-shampoo.png";
import Education from "../../assets/icons/trainer.png";
import Walks from "../../assets/icons/walk.png";
import styles from "./Searcher.module.css"

export function Searcher(){
    return(
<div className={styles.searcher_categories}>
    <div className={styles.category}>
        <div className={styles.img_frame}>
                <img src={Walks} className={styles.img_size} alt="Paseos"></img>
        </div>
        <p className={styles.categories_title}>Paseos</p>
    </div>

    <div className={styles.category}>
        <div className={styles.img_frame}>
                <img src={Night} className={styles.img_size} alt="Hotel"></img>
         </div>
                <p className={styles.categories_title}>Hotel</p>
    </div>

    <div className={styles.category}>
        <div className={styles.img_frame}>
                <img src={AnimalCare} className={styles.img_size} alt="Guardería"></img>
        </div>    
                <p className={styles.categories_title}>Guardería</p>
    </div>

    <div className={styles.category}>
         <div className={styles.img_frame}>
                <img src={PetCare} className={styles.img_size} alt="Cuidados"></img>
        </div>
                <p className={styles.categories_title}>Cuidados</p>
    </div>

    <div className={styles.category}>
        <div className={styles.img_frame}>
                <img src={Food} className={styles.img_size} alt="Alimentación"></img>
        </div>
                <p className={styles.categories_title}>Alimentación</p>
    </div>

    <div className={styles.category}>
        <div className={styles.img_frame}>
                <img src={Education} className={styles.img_size} alt="Educación"></img>
        </div>
                <p className={styles.categories_title}>Educación</p>
    </div>

</div>
    );

}

export default Searcher