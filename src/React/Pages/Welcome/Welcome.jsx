import react, {useState} from 'react';

/* Components------*/
import Slideshow from './SlideShow.jsx';
import Tabbed from './Tabbed.jsx';
import Staff from './Staff.jsx';



const Welcome =() => {
    const [imageSrc, imageSrcUpdate] = useState ('/assets/img/eli_normal.jpg');

const imageOver =( ) => {
    imageSrcUpdate('/assets/img/eli_wacky.jpg');
}
const imageOut =( ) => {
    imageSrcUpdate('/assets/img/eli_normal.jpg');
}
    return (
        <div>
            <img src={ imageSrc }
            onMouseOver={imageOver}
            onMouseOut={imageOut}
            />
            <p>Eli Manning was an elite NFL quarterback.  </p>
        </div>
    )
}
<div>
    <Slideshow />
    <Tabbed />
    <Staff />   
</div>
export default Welcome ;