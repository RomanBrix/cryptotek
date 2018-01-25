import React, {Component} from 'react';
import  $ from 'jquery';
import "../../css/scss/Head.scss";
import {head_img, main_link} from "../URL";

export default class Head extends Component {
    render() {
          return (
            <div className="head">
                <div className="head-container">
                    <div className="img-cont">
                        <img src={head_img} alt=""/>
                    </div>
                    <h1>CRYPTOTEK CORPORATION</h1>
                    <p>
                        Международная американская корпорация.Мы работаем на рынке криптовалют с 2016 года, имеем
                        лицензию на осуществление деятельности в 191 стране. Измени свою жизнь, стань представителем
                        Cryptotek Corp. в своей стране.
                    </p>
                    <div className="btn_big" id="btn1" onClick={()=>{
                        window.open(main_link);
                    }}><div>СТАТЬ ПРЕДСТАВИТЕЛЕМ</div> <i className="icon-banknote"/></div>
                    <i className="icon-angle-double-down" onClick={()=>{
                        const topPos = $("#nextStage").offset().top;
                        $('body,html').animate({scrollTop: topPos}, 1200);
                    }}/>
                </div>
            </div>
        )
    }
}
