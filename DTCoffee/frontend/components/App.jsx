import React from "react";
import AuthPage from './session/auth_page.jsx'
import NavBar from './nav_bar'
import Footer from './footer'
const App = () =>(
    <div className='app'>
        <NavBar/>
        <AuthPage/>
        <Footer/>
    </div>
);

export default App;