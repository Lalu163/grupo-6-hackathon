import { get } from "../../Helper/get"
import { useEffect } from "react"
import { Card } from "../Card/Card"

export const CardList = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        get().then((data) => setItems(data))
    },[])
    return (
        <div>
            
        </div>
    )
}