import styles from "./Card.module.css"
import {Link} from "react-router-dom"
export const Card = (props)=>{
    const {id, image, title, description, species, service, price} = props
    return(
            <Link to={`/Detail/${id}`}>
                <div>
                    <div className={styles.cardContainer}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.info}>
                        <div><img src={require(`../../assets/images/${image}.jpg`)} alt="" width="100" height="100" className={styles.fotoperfil}/></div>
                        <div className={styles.description}>{description}</div>
                        </div>
                        <div>Servicio: {service}</div>
                        <div>Especie: {species}</div>
                        <div>Precio: {price}</div>
                    </div>
                </div>
            </Link>
    );

}