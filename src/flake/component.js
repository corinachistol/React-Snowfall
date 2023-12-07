import './style.scss';
import {useEffect,useState} from 'react';

//HW1: make sure the component detects the moment it reaches the bottom
//HW2: when the component reaches the bottom it should remove itself from the virtual DOM

const Flake = ({ 
        size = 0,
        color = 0,
        top = 0,
        left = 0
    }) => {
        console.log(size)
        // console.log(color)

    let [_top,setTop] = useState(top)
    console.log(_top)

    const heigthC = window.innerHeight

    // //useEffect(......)
    const timer = setTimeout(()=>{
        setTop(_top + 10)
        console.log("Update executed!")
    
    },500)
    //

    if(_top > heigthC) {
        console.log("bottom reached")
        clearTimeout(timer)
    }
    

    const style = {
        '--size': `${size}px`,
        '--color': color,
        '--top': `${_top}%`,
        '--left': `${left}%`,
       
    }    
    
    return (
        <div 
            style={_top > heigthC ? {display:"none"}  : style}
            className="flake"
        >

        </div>
    )
}

export default Flake