import { useState,useEffect } from 'react';
import './style.scss';
import Flake from '../flake/component';
import {randColor, randInt} from '../../helpers/generators'

const Snow = ({quantity}) => {
    // let width= window.innerWidth
    // console.log(width) 
    let left = randInt(0, 5 )
    let color= randColor({redish: 0.1, greenish: 0.1, blueish: 0.85} )

    let initialFlakes = Array.from({length:5}, (_,i)=>{
        return <Flake key={i+1} size={10} top={0} left={(i+left) * 10} color={color}/>
    })
    // let initialFlakes=[]

    // for(let i = 0; i <= quantity; i++){
    //     initialFlakes.push(
    //         <Flake key={i} size={10} top={0} left={(i+left) * 10} color={color}/>
    //         )
    //     }
        
    let [flakes,setFlakes] = useState(initialFlakes)
    console.group(flakes)
    const TOP_LIMIT = 80

    //HW1:apply the limit to each flake - filter done
    //HW2: refactor the initialization lofic - add 5 flakes with random left, color and different keys
    //HW3: destructure in flake 

    useEffect(()=>{
        setTimeout(() => {
                setFlakes(flakes
                    .filter(flake => flake.props.top < TOP_LIMIT)
                    .map(flake=> 
                        <Flake {...flake.props} 
                                top={flake.props.top + 5}
                                />
                    )
                )
        }, 500);
    },[flakes])


    //varianta fara destructurizare
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setFlakes( flakes
    //             .filter( flake=> flake.props.top < TOP_LIMIT )
    //             .map(flake=> 
    //                     <Flake 
    //                         key={flake.props.key} 
    //                         size={flake.props.size} 
    //                         top={flake.props.top + 5} 
    //                         left={flake.props.left} 
    //                         color={flake.props.color}/>
    //             )
    //         )
    //     },500)
    // })

    return(
       flakes
        
    )
}

export default Snow