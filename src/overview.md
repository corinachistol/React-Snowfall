
## VARIANTA FARA VARIABILA SASS
    Obiectul style se ataseaza prop style si devine stil intern, care se trasnmite DOM virtual si eventual DOM real

   const style = {
        width:`${size}px`,
        height: `${size}px`,
        backgroundImage: `radial-gradient(${color}, transparent 60%)` 
    }



Flake
   \            props
    \             |
     \            v
+-----+-------({ size,color })----------+
|                  |                    |
|                  v                    |
|        style ={... }                  |
|                  |                    |
|                  v                    |
|     <div style={...}>                 |
|       </div>                          |
|                                       |
+---------------------------------------+






## VARIANTA CU VARIABILA SASS
    
    Legatura dintre obiects js 'style'  care determina aspectul fulgului si pina la stilurile atasate DOM real, trece printr-un punct intermediar.

     In style.scss utilizam variabile pentru width, height si bgImage.
       > width:var(--size);
       > height: var(--size);
       > background-image: radial-gradient(var(--color), transparent 60%) ;
    
    Variabilele sunt convertite in culori si transmise obiectul style care se ataseaza stilului intern in DOM real.
    Acum toate modificarile facute la variabile nu va influenta deloc comportamentul componentei Flake

 const style = {
       '--size': `${size}px`,
       '--color': color,
    }



Flake
   \            props
    \             |
     \            v
+-----({ size,color,top,left })---------+
|                  |                    |
|                  v                    |
|        style ={... }                  |       loose coupling: object -> styles
|                  |                    |
|                  +--------------------------------------+
|                                                         |            
|                                                         v
|                                                       css vars
|                                                         |
|                  +--------------------------------------+
|                  |                    |
|                  v                    |
|     <div style={...}>                 |
|       </div>                          |
|                                       |
+---------------------------------------+



                     props
Flake                  |
    \                  v
+--------({..., ..., top, ...})-----------+
|                      |                  |
|                      |                  |
|                      +------------------------------------+
|                                                           |
|                                                           |              +-------+
|                      [_top,setTop] <-------------> useState(top) <------>|    0  |
|                      |                  |                                +-------+
|                      |                  | 
|                      |                  | 
|                      +------------------------------------+
|                                         |                 |
|                                         |                 v
|                                         |              css vars
|                                         |                 |
|                      +------------------------------------+
|                      |                  |
|                      v                  |
|           <div style={style}>           |
|           </div>                        |
|                      |                  |
+----------------------v------------------+                      




    <App />-------+
      |           |        +----------- setShowChild(false)     
      |      callback      |                |
      |           |        |                |
      |           |        v                |
      |+-------<Flake ...   />              |
                  x props                   |
                  |                         |
                  |                         |
                  |                         |
                  |                         |
                  |                         |   <flake render lifecycle >
                  |                         |
                  |                         |
                  |                         |
                  v < return ( </>)         |
                    < useEffect (()=>{      |
                        if () =>whenDone()  |
                        else => setTimeout(  )
                    })