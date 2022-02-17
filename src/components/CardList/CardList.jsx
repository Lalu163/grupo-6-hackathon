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
            {items.map((item) => <div>{item.id}</div>)}
        </div>
    )
}