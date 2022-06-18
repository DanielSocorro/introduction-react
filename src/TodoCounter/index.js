import React from 'react';
import './TodoCounter.css';


function TodoCounter({total, completed}) {
    return(
        <h2 className='TodoCounter'>Completed {completed} of {total} Sings</h2>
    )
 }

 export { TodoCounter };