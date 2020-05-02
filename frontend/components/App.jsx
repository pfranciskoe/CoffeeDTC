import React from "react";
import ModalContainer from './modal/modal_container';
import NavBarContainer from './nav/nav_bar_container';
import Home from './home/home';
import { Provider } from 'react-redux';
import Footer from './footer';
import {Route} from 'react-router-dom';
import OnboardingContainer6 from './onboarding/onboarding_container_6';
import OnboardingContainer5 from './onboarding/onboarding_container_5';
import OnboardingContainer4 from './onboarding/onboarding_container_4';
import OnboardingContainer3 from './onboarding/onboarding_container_3';
import OnboardingContainer2 from './onboarding/onboarding_container_2';
import OnboardingContainer1 from './onboarding/onboarding_container_1';
import MatchesContainer from "./matches/matches_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util'


// import OnboardingContainer from './onboarding/onboarding_container'
const App = () =>(
    <div className='app'>
        <NavBarContainer/>
        <ProtectedRoute exact path="/matches" component={MatchesContainer} />
        <Route exact path="/" component={Home}/>
        <ProtectedRoute exact path="/onboarding/1" component={OnboardingContainer1}/>
        <ProtectedRoute exact path="/onboarding/2" component={OnboardingContainer2} />
        <ProtectedRoute exact path="/onboarding/3" component={OnboardingContainer3} />
        <ProtectedRoute exact path="/onboarding/4" component={OnboardingContainer4} />
        <ProtectedRoute exact path="/onboarding/5" component={OnboardingContainer5} />
        <ProtectedRoute exact path="/onboarding/6" component={OnboardingContainer6} />
        <ModalContainer className='modal-cont'/>
        <Footer/>
    </div>
);

export default App;