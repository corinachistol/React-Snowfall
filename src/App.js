import Flake from "./flake/component.js";
import { randColor, randInt } from './helpers/generators.js';
import {useState} from 'react';

export default function App() {
    
    let [showChild, setShowChild] = useState(true)
    
    return (
        <div className="App">

           
           {showChild && <Flake size={randInt(20,40)}
                color={randColor()}
                top={0}
                left={randInt(0,100)}
                whenDone={()=>{setShowChild(false)}} 
            />}
        </div>
    )
}