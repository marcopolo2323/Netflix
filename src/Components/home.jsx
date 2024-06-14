import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faList } from '@fortawesome/free-solid-svg-icons';

function Home (){

    return(
        <div className="contenedor">
            <div className='background_container'>
                <div className='contenedor_title'>
                    <h1 className='title'>Deadpool 3</h1>
                    <p>Deadpool es un psicopata Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta suscipit consequuntur quis vitae numquam minus commodi magni explicabo illum laborum at libero, eos eum nemo nulla, culpa iste magnam?</p>
                    <div className="buttons">
                        <button className="btn play"><FontAwesomeIcon icon={faPlay}/> Play</button>
                        <button className="btn my-list"><FontAwesomeIcon icon={faList}/> My List</button>
                    </div>    
                </div>
                <div className='container_cards' >
                
                </div>
            </div>
        </div>
    )
}

export default Home;