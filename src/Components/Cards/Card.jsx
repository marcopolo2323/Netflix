import './Card.css'

const Card=(props)=>{
    return(
    <div className='div__mayor'> 
        <div className='container'>
                <img className='img' src={props.image} alt="Card Image" />
        </div>
    </div>
    ) 
}

export default Card; 