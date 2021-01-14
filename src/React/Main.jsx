import react, {useState} from 'react';

const Main =() => {
    const [imageSrc, imageSrcUpdate] = useState ('/assets/img/eli_normal.jpg');

const imageOver =( ) => {
    imageSrcUpdate('/assets/img/eli_wacky.jpg');
}
const imageOut =( ) => {
    imageSrcUpdate('/assets/img/eli_normal.jpg');
}
    return (
        <div1>
            <img src={ imageSrc }
            onMouseOver={imageOver}
            onMouseOut={imageOut}
            />
            <p>I was an elite NFL Quarterback</p>
        </div1>
    )
}

export default Main ;