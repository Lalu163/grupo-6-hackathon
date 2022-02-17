import { get } from "../../Helper/get"
import { useEffect, useState } from "react"
import { Card } from "../Card/Card"

export const CardList = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        get().then((data) => setItems(data))
    },[])
    return (
        
            <div>
                {items.map(({id, image, title, description, species, service, price}) => <Card id={id} image={image} title={title} description={description} species={species} service={service} price={price} key={id}/>)}
            </div>
        
    )
}