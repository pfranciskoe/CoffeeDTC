import React from "react";
import ModalContainer from './modal/modal_container'
import NavBarContainer from './nav/nav_bar_container'
import Home from './home/home'
import { Provider } from 'react-redux';
import Footer from './footer'
import {Route} from 'react-router-dom'
// import OnboardingContainer from './onboarding/onboarding_container'
const App = () =>(
    <div className='app'>
        <NavBarContainer/>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/onboarding" component={Onboarding} /> */}
        <ModalContainer className='modal-cont'/>
        <Footer/>
    </div>
);

export default App;