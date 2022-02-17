import {Card} from "../../components/Card/Card"
import { useEffect, useState } from "react"
import {get} from "../../Helper/get"
import styles from "./Detail.module.css"
import {useParams} from "react-router-dom"
import Header from "../../components/Header/Header";

export const Detail =() =>{
    const [items, setItems] = useState([])
    const {id} = useParams()
    useEffect(() => {
        get().then((data) => setItems(data))
    },[])
    const filtered = items.filter((item) => item.id == id)
    console.log(id)
    return(
        <div>
            <Header/>
            <div className={styles.cardList}>
                    {filtered.map(({id, image, title, description, species, service, price}) => <Card id={id} image={image} title={title} description={description} species={species} service={service} price={price} key={id}/>)}
            </div>
        </div>       
    )
}