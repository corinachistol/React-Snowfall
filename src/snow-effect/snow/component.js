import { useState,useEffect } from 'react';
import './style.scss';
import Flake from '../flake/component';
import {randColor} from '../../helpers/generators'

const Snow = ({quantity}) => {
    
    let color= 'rgb(50,50,255)'
    let [top,setTop] = useState(0)
    let [flakes,setFlakes] = useState([<Flake key={1} size={10} top={top} color={color}/>])
    
    // let [flakes, setFlakes] = useState([])

    const TOP_LIMIT = 80

    // useEffect(()=>{
    //     setTimeout(() => {
    //         if(top > TOP_LIMIT){
    //             setFlakes([])
    //         }else{
    //             setTop(top+5)
    //             setFlakes([<Flake key={1} size={10} top={top} color={color}/>])
              
    //         }
    //     }, 500);
    // })

    useEffect(()=>{
        setTimeout(()=>{
            if(top > TOP_LIMIT) {
                setFlakes([])
            } else{
                setFlakes(flakes=> {
                console.log(flakes)
                let filtered = flakes.filter(flake=>flake.props.top < TOP_LIMIT )
                console.log(filtered)
                let mapped = filtered.map((filFlake)=>{
                    return {
                        ...filFlake,
                        top: setTop(top=>top+5)
                    } 
                    } )
                    return mapped
            })
            }
            
            
            
            // setFlakes([])
            // setFlakes(flakes=>flakes
            //     .filter(flake=>flake.props.top < TOP_LIMIT)
            //     .map(filFlake=>{
            //         const {top} = filFlake.props
            //         return top < TOP_LIMIT? {
            //             ...filFlake,
            //             top: setTop(t=>t+5)
            //         }: null
                    
            //     })
            // )

            // setFlakes(flakes=>
            //     flakes.filter(flake=>{
            //         return flake.props.top < TOP_LIMIT ?
            //         flakes.map(fl=>{
            //             // const {top} = fl.props
            //             return {
            //                 ...fl,
            //                 top:setTop(t=>t+5)
            //             } 
            //         }) : null
            //     })
            //     )


           
        },500)
    })

    return(
        flakes
    )
}

export default Snow