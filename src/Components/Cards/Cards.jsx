import { useEffect, useState } from "react";
import Card from "./Card";
import './Cards.css' 

const Cards_ = ()=>{
    const [Cards,setCards] = useState([])

    useEffect(()=>{
        const fetchCards = async()=>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos') //El async trabaja con el await por si demora en la peticion del url.
                const data = await response.json()
                setCards(data)
            } catch (error) {
                console.log("Error: ",error)
            }
        }
        fetchCards()
    },[])

    return(
        <div className="genereral">
            
            {
                Cards.map((e)=>{
                    return(
                    <div className="general_card">
                       <Card
                       image={e.url}
                       />     
                    </div>
                    )
                })
            }
            
        </div>
    )
}

export default Cards_