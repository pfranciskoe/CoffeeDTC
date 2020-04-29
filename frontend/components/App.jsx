import React from "react";
import AuthPage from './session/auth_page.jsx'
import NavBarContainer from './nav/nav_bar'
import Footer from './footer'
const App = () =>(
    <div className='app'>
        <NavBarContainer/>
        <AuthPage/>
        <Footer/>
    </div>
);

export default App;