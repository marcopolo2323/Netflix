import VideoRow from './Cards/videoRow';
import './Home.css';
import videos from './../video.json'

function Home (){
    const jsonFilePath = './../video.json'; // Ruta relativa a tu archivo JSON

    return(
        <div className="contenedor">
            <div className='background_container'>
                <div className='contenedor_title'>
                    <h1 className='title'>Deadpool 3</h1>
                    <p>Deadpool es un psicopata Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta suscipit consequuntur quis vitae numquam minus commodi magni explicabo illum laborum at libero, eos eum nemo nulla, culpa iste magnam?</p>
                    <div className="buttons">
                        <button className="btn play">Play</button>
                        <button className="btn my-list">My List</button>
                    </div>    
                </div>
                <div className='container_cards' >
                
                </div>
            </div>
        </div>
    )
}

export default Home;