import React from "react";
import ModalContainer from './modal/modal_container'
import NavBarContainer from './nav/nav_bar_container'
import { Provider } from 'react-redux';
import Footer from './footer'
const App = () =>(
    <div className='app'>
        <NavBarContainer/>
        <ModalContainer/>
        <Footer/>
    </div>
);

export default App;