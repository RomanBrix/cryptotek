import React, {Component} from 'react';
import "../../css/scss/comments.scss";

export default class Comments extends Component {
    render(){
        return(
            <div className="comment">
                <div className="comment-container">
                    <h1>ОТЗЫВЫ ПАРТНЕРОВ</h1>
                    <div className="vidosi">
                        <iframe width="25%" src="https://www.youtube.com/embed/L9pr2rRBB6I" frameBorder="0"  allowFullScreen/>
                        <iframe width="25%" src="https://www.youtube.com/embed/NujKobBqCc4" frameBorder="0"  allowFullScreen/>
                        <iframe width="25%" src="https://www.youtube.com/embed/8DAizAh_T_M" frameBorder="0"  allowFullScreen/>
                        <br/>
                        <iframe width="25%" src="https://www.youtube.com/embed/gyAjGpR46eI" frameBorder="0"  allowFullScreen/>
                        <iframe width="25%" src="https://www.youtube.com/embed/_wX_eyPO7e0" frameBorder="0"  allowFullScreen/>
                        <iframe width="25%" src="https://www.youtube.com/embed/QE9TAnmK384" frameBorder="0"  allowFullScreen/>

                    </div>
                </div>
            </div>
        )
    }
}
