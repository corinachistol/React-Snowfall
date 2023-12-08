import './style.scss';
import {useEffect,useState} from 'react';

//HW1: make sure the component detects the moment it reaches the bottom
//HW2: when the component reaches the bottom it should remove itself from the virtual DOM

const Flake = ({ 
        size = 0,
        color = 0,
        top = 0,
        left = 0,
        whenDone = () => { throw new Error('whenDone callback not implemented') }
    }) => {

    const TOP_LIMIT  = 100

    let [_top,setTop] = useState(top)
    console.log('_top:',_top)

    useEffect(()=> {
        if( _top > TOP_LIMIT){
            whenDone()
        }else{
            setTimeout(()=>{
                setTop(_top + 10)
                console.log("Update executed!")
        
            },500)
        }

    })


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

export default Flake