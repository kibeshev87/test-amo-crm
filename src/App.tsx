import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sections} from "./components/sections/Sections";
import {Footer} from "./components/footer/Footer";

function App() {

    return (
        <div className="App">
            <div className='container'>
                <Header/>
                <Sections/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
