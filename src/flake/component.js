import './style.scss';
import { randColor, randInt } from '../helpers/generators.js';


const Flake = ({ 
        size = randInt(20,40), 
        color = randColor()
    }) => {
        console.log(size)
        // console.log(color)

    const style = {
       '--size': `${size}px`,
       '--color': color,
    }

 

    return (
        <div 
            style={style}
            className="flake"

        >

        </div>
    )
}

export default Flake