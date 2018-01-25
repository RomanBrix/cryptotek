import React, {Component} from 'react';
import '../../public/src/FontIcon/styles.css';
import Head from "./Head";
import About from "./About";
import Review from "./Review";
import How from "./How";
import Why from "./Why";
import Info from "./Info";
import Howmuch from "./Howmuch";
import Profitable from "./Profitable";
import Comments from "./Comments";
import Footer from "./Footer";


export default class App extends Component {
    render(){
        return(
            <div className="main-container">
                <Head/>
                <About/>
                <Review/>
                <How/>
                <Why/>
                <Info/>
                <Howmuch/>
                <Profitable/>
                <Comments/>
                <Footer/>
            </div>
        )
    }
}