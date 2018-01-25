import React, {Component} from 'react';
import $ from 'jquery';
import {main_link} from "../URL";
import '../../css/scss/info.scss';

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: 0
        }
    }

    ChangeMenu(n, left) {
        this.setState({
            menuItem: n
        });
        $("#point").css('left', left + "px");
    }

    render() {
        return (
            <div className="info">
                <div className="info-container">
                    <div className="menu">
                        <ul>
                            <li onClick={() => {
                                this.ChangeMenu(0, 20);
                            }}>Майнинг
                            </li>
                            <li onClick={() => {
                                this.ChangeMenu(1, 153);
                            }}>Трейдинг
                            </li>
                            <li onClick={() => {
                                this.ChangeMenu(2, 293);
                            }}>Депозиты
                            </li>
                            <span id="point"/>
                        </ul>
                    </div>
                    <div className="wrapper">
                        {this.wrapper()}
                    </div>
                </div>
            </div>
        )
    }

    wrapper() {
        const {menuItem} = this.state;
        switch (menuItem) {
            case 0:
                return (
                    <div className="mining">
                        <div className="left">
                            <h1>Как начать майнить?</h1>
                            <div className="video">
                                <iframe width="100%" src="https://www.youtube.com/embed/otYI36anOQk" frameBorder="0"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div className="right">
                            <p>
                                Сотрудничая с нами, у Вас нет необходимости в больших капиталовложениях, достаточно
                                арендовать наше оборудование, и вы сможете зарабатывать, не выходя из дома. Мы
                                сотрудничаем с производителями устройств для майнинга и ведем свои разработки в этом
                                направлении. Наша цель - создание своих ASIC-майнеров, которые позволят нам более
                                эффективно работать на рынке майнинга. <br/><br/>

                                <b>Инвестируя свои средства в майнинг, вы получаете:</b><br/>
                            </p>
                            <ul>
                                <li>
                                    Инновационный бизнес, с доходностью в разы выше, чем при инвестировании в
                                    банковские
                                    депозиты или линейные виды ббизнеса
                                </li>
                                <li>
                                    Нет рисков. Гарантированный доход.
                                </li>
                                <li>
                                    Доходность в режиме реального времени
                                </li>

                            </ul>
                        </div>
                        <div className="btn_big" id="btn4" onClick={() => {
                            window.open(main_link);
                        }}>
                            <div>СТАТЬ ПРЕДСТАВИТЕЛЕМ</div>
                            <i className="icon-banknote"/></div>
                    </div>
                );
                break;
            case 1:
                return (
                    <div className="mining">
                        <div className="left">
                            <h1>Как начать трейдить?</h1>
                            <div className="video">
                                <iframe width="100%" src="https://www.youtube.com/embed/1ZyVM0DUv3M" frameBorder="0"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div className="right">
                            <p>
                                Одно из направлений работы нашей компании - торговля криптовалютами, трейдинг. Курс
                                криптовалют имеет большую волатильность, что дает высокую доходность при правильно
                                организованной работе. <br/><br/>

                                <b>Особенности инвестирования в трейдинг криптовалют:</b><br/>
                            </p>
                            <ul>
                                <li>
                                    Доходность торговли на бирже выше, чем доходность от майнинга.
                                </li>
                                <li>
                                    Создан специальный стабилизационный фонд, в который идут отчисления от каждой
                                    успешной сделки.
                                </li>
                                <li>
                                    Возможность получать доходы сразу после завершения операционной недели.
                                </li>

                            </ul>
                        </div>
                        <div className="btn_big" id="btn4" onClick={() => {
                            window.open(main_link);
                        }}>
                            <div>СТАТЬ ПРЕДСТАВИТЕЛЕМ</div>
                            <i className="icon-banknote"/></div>
                    </div>
                )
                break;
            case 2:
                return (
                    <div className="mining">
                        <div className="left">
                            <h1>Как сделать депозит?</h1>
                            <div className="video">
                                <iframe width="100%" src="https://www.youtube.com/embed/FsUUgc3xEYc" frameBorder="0"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div className="right">
                            <p>
                                В майнинге и торговле криптовалютами мы уже достигли хороших результатов, но не
                                останавливаемся на достигнутом, расширяем свою деятельность. На сегодняшний день мы
                                вкладываем средства в стартапы, разработку собственных устройств для майнинга и создание
                                собственной криптовалюты. Депозиты - самое новое и наиболее доходное направление
                                сотрудничества с компанией Cryptotek, и самое важное, так как это инвестиции в развитие
                                компании. <br/><br/>

                                <b>Особенности инвестирования в депозиты:</b><br/>
                            </p>
                            <ul>
                                <li>
                                    Депозиты дают максимальную доходность.
                                </li>
                                <li>
                                    Доходность депозитов, в отличии от майнинга и трейдинга, имеет фиксированный процент, который гарантирован компанией Cryptotek.
                                </li>
                            </ul>
                        </div>
                        <div className="btn_big" id="btn4" onClick={() => {
                            window.open(main_link);
                        }}>
                            <div>СТАТЬ ПРЕДСТАВИТЕЛЕМ</div>
                            <i className="icon-banknote"/></div>
                    </div>
                )
                break;
        }
    }
}
