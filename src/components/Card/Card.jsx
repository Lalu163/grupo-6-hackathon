import styles from "./Card.module.css"
import {Link} from "react-router-dom"
export const Card = (props)=>{
    const {id, image, title, description, species, service, price} = props
    let message = `Hola estoy interesada en tu anuncion ${title}`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+34600835202&text=${message}`
    return(
                <div>
                    <div className={styles.cardContainer}>
                        <Link to={`/Detail/${id}`}>
                        <div className={styles.title}>{title}</div>
                        <div>Servicio: {service}</div>
                        <div>Especie: {species}</div>
                        <div className={styles.info}>
                        <div><img src={require(`../../assets/images/${image}.jpg`)} alt="" width="100" height="100" className={styles.fotoperfil}/></div>
                        <div className={styles.description}>{description}</div>
                        </div>
                        </Link>
                        
                        <div className={styles.bottomInfo}>
                            <div>Precio: {price}</div>
                            <div><a href={whatsappUrl}><button className={styles.contactButton}>Contactar</button></a></div>
                        </div>
                    </div>
                </div>
            );

}