import React from "react";
import ModalContainer from './modal/modal_container'
import NavBarContainer from './nav/nav_bar_container'
import Home from './home/home'
import { Provider } from 'react-redux';
import Footer from './footer'
const App = () =>(
    <div className='app'>
        <NavBarContainer/>
        <Home/>
        <ModalContainer className='modal-cont'/>
        <Footer/>
    </div>
);

export default App;