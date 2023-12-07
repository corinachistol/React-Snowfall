import Flake from "./flake/component.js";
import { randColor, randInt } from './helpers/generators.js';

export default function App() {
    return (
        <div className="App">

            {/* custom code */}
        <Flake size={randInt(20,40)}
                color={randColor()}
                top={0}
                left={randInt(0,100)} />
        </div>
    )
}