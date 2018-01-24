import React, {Component} from 'react';
import '../../css/scss/about.scss';
import {
    about_img_1,
    about_img_2,
    about_img_3
} from '../URL';
export default class About extends Component {
    render() {
        return (
            <div className="about" id="nextStage">
                <div className="about-container">
                    <div className="top-about">
                        <div className="left">
                            <h1>О КОМПАНИИ</h1>
                            <p>
                                Компания TEK основана в Великобритании в 2012-ом году. В 2015-ом году, мы осознали, что
                                нам не хватает главного - технологичности и инноваций и стали делать первые шаги в сфере
                                криптовалют. В 2016 году мы нацелились на эффективное сотрудничество с инвесторами,
                                лидерами финансового мира и основали наш новый публичный сервис - Cryptotek.org, а позже
                                и корпорация CryptoTEK, которая стала новой ступенью в нашем развитии. С нами
                                сотрудничают представители со всего мира, которые уже достигли больших высот. Тысячи
                                представителей смогут подтвердить что сотрудничество с Cryptotek Corportaion - это ключ
                                к успешной жизни. Компания Cryptotek Corporation зарегистрирована и ведет свою
                                деятельность в США. За все время работы мы добились высоких результатов и стали лидером
                                рынка криптовалют.
                            </p>
                            <div className="btn_big" id="btn1" onClick={()=>{
                                window.open('cryptoteck.org');
                            }}><div>СТАТЬ ПРЕДСТАВИТЕЛЕМ</div> <i className="icon-banknote"/></div>
                        </div>
                        <div className="right">
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/7MUbN_FX49Q?rel=0?color=white" frameBorder="0" allowFullScreen/>
                        </div>
                    </div>
                    <div className="about-bottom">
                        <div className="img"><img src={about_img_1} alt=""/></div>
                        <div className="img"><img src={about_img_2} alt=""/></div>
                        <div className="img"><img src={about_img_3} alt=""/></div>
                    </div>
                </div>
            </div>
        );
    }
}
