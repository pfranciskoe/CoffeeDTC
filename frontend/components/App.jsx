import React from "react";
import AuthPage from './session/auth_page.jsx'
import NavBarContainer from './nav/nav_bar_container'
import { Provider } from 'react-redux';
import Footer from './footer'
const App = () =>(
    <div className='app'>
        <NavBarContainer/>
        <AuthPage/>
        <Footer show={false}/>
    </div>
);

export default App;