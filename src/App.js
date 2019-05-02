
import React, { Component } from 'react';
import BtnLogin from "./components/BtnLogin"
// import BtnFavorite from "./components/BtnFavorite"
import Footer from './components/Footer';
import Logo from "./components/Logo"
import ModalFilter from "./components/ModalFilter"
import SimpleSlider from "./components/SimpleSlider"
import WeatherAPI from './components/WeatherAPI';
import './App.css';
import './components/BtnNavBar.scss';
import './components/WeatherDiv';
import "./components/ModalAffichage.css";

class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">   
          <div className="logo1"><Logo /><span className="logoTitre">Weather Time</span></div>
           <BtnLogin />
           <ModalFilter />
        </header>   
        <body> 
        <div className="WeatherAPI"><WeatherAPI /></div>
      
        <div className="footer"> <Footer /></div>
        </body>
        </div>
       
       
    )
  }
}

                    


export default App;