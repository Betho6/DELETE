import react, {useState} from 'react';

/* Components------*/
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff.jsx';



const Welcome =() => {
    return(
    <div>
        <Tabbed />
        <Staff />   
    </div>
    );
}

export default Welcome ;