import AnimalCare from "../../assets/icons/animal-care.png";
import Food from "../../assets/icons/dog-food.png";
import Night from "../../assets/icons/moon.png";
import PetCare from "../../assets/icons/pet-shampoo.png";
import Education from "../../assets/icons/trainer.png";
import Walks from "../../assets/icons/walk.png";
import styles from "./Searcher.module.css"

export function Searcher(){
    return(
<div class={styles.searcher_categories}>
    <div class={styles.category}>
        <div class={styles.img_frame}>
                <img src={Walks} class={styles.img_size} alt="Paseos"></img>
        </div>
        <p class={styles.categories_title}>Paseos</p>
    </div>

    <div class={styles.category}>
        <div class={styles.img_frame}>
                <img src={Night} class={styles.img_size} alt="Hotel"></img>
         </div>
                <p class={styles.categories_title}>Hotel</p>
    </div>

    <div class={styles.category}>
        <div class={styles.img_frame}>
                <img src={AnimalCare} class={styles.img_size} alt="Guardería"></img>
        </div>    
                <p class={styles.categories_title}>Guardería</p>
    </div>

    <div class={styles.category}>
         <div class={styles.img_frame}>
                <img src={PetCare} class={styles.img_size} alt="Cuidados"></img>
        </div>
                <p class={styles.categories_title}>Cuidados</p>
    </div>

    <div class={styles.category}>
        <div class={styles.img_frame}>
                <img src={Food} class={styles.img_size} alt="Alimentación"></img>
        </div>
                <p class={styles.categories_title}>Alimentación</p>
    </div>

    <div class={styles.category}>
        <div class={styles.img_frame}>
                <img src={Education} class={styles.img_size} alt="Educación"></img>
        </div>
                <p class={styles.categories_title}>Educación</p>
    </div>

</div>
    );

}

export default Searcher