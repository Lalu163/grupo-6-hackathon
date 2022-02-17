import styles from "./Card.module.css"

export const Card = (props)=>{
    const {id, image, title, description, species, service, price} = props
    return(
            <div>
                <div className={styles.cardContainer}>
                    <div>{title}</div>
                    <div><img src={require(`../../assets/images/${image}.jpg`)} alt="" width="100" height="100"/></div>
                    <div>{description}</div> 
                    <div>{service}</div>
                    <div>{species}</div>
                    <div>{price}</div>
                </div>
            </div>
    );

}