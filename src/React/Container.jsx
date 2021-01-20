import react from 'react';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import TransitioningPictures from './TransitioningPictures.jsx';
import Footer from './Footer.jsx';



const Container = () => {

    return (
        <div classname='container'>
            CONTENT
            <Header />
            <Nav />
            <TransitioningPictures />
            <Footer />
        </div>
    );
}

export default Container;