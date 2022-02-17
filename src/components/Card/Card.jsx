import HelPet from "../../assets/icons/HelPet.png"
import styles from "./Card.module.css"

export function Card(props){
    const {id, image, title, description, species, service, price} = props
    return(
<div>
    <section className={styles.cardContainer}>
        <div>{title}</div>
        {/* <div><img src={require(`${image}`)} alt={title}/></div> */}
        <div>{description}</div>
        <div>{service}</div>
        <div>{species}</div>
        <div>{price}</div>
    </section>
</div>
    );

}