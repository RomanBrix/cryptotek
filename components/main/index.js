import React, {Component} from 'react';
import Head from "./Head";
import '../../public/src/FontIcon/styles.css';
import About from "./About";


export default class App extends Component {
    render(){
        return(
            <div className="main-container">
                <Head/>
                <About/>
            </div>
        )
    }
}