import './style.scss';
import { randColor, randInt } from '../helpers/generators.js';


const Component = ({name}) => {

    return (
        <div className={name}></div>
    )
}

//decorator
const withStyle = (Component) => {
    return ({
        size = randInt(20,40), 
        color = randColor(),
        ...props
    }) => {
        return (
            <div style={{
                width:`${size}px`, 
                height:`${size}px`, 
                backgroundImage: `radial-gradient(${color}, transparent 60%)` }}>
                
                <Component {...props} />
            </div>
        )
    }
}

const Flake = withStyle(Component)

// const Flake = ({ 
//         size = randInt(20,40), 
//         color = randColor()
//     }) => {
//         console.log(size)
//         // console.log(color)

    
//     const style = {
//         width:`${size}px`,
//         height: `${size}px`,
//         backgroundImage: `radial-gradient(${color}, transparent 60%)` 
//     }

//     return (
//         <div 
//             style={style}
//             className="flake"

//         >

//         </div>
//     )
// }

export default Flake


//varianta cu default random care citeodata poate da batai de cap
const Flake = ({ 
    size = randInt(20,40), 
    color = randColor(),
    top = 0,
    left = randInt(0,100)
}) => {
    console.log(size)
    // console.log(color)

const [_top,setTop] = useState(top)

setTimeout(()=>{
    setTop(_top + 10)
    console.log("Update executed!")
},5000)

const style = {
    '--size': `${size}px`,
    '--color': color,
    '--top': `${_top}%`,
    '--left': `${left}%`,
   
}    

return (
    <div 
        style={style}
        className="flake"

    >

    </div>
)
}

