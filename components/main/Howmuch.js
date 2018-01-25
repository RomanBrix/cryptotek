import React, {Component} from 'react';
import $ from 'jquery';
import '../../css/scss/howmuch.scss'
import {main_link} from "../URL";

export default class Howmuch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: 1
        }
    }

    ChangeMenu(n, target) {
        this.setState({
            menuItem: n
        });
        $(".active").toggleClass('active');
        $(target).toggleClass('active');
    }

    render() {
        return (
            <div className="howmuch">
                <div className="howmuch-container">
                    <h1>Сколько Вы заработаете с Cryptotek?</h1>
                    <p>Выберите одно из 3 направлений</p>
                    <div className="menu">
                        <ul>
                            <li onClick={({target}) => {
                                this.ChangeMenu(0, target);
                            }}>Майнинг криптовалют
                            </li>
                            <li className="active" onClick={({target}) => {
                                this.ChangeMenu(1, target);

                            }}>Торговля на бирже
                            </li>
                            <li onClick={({target}) => {
                                this.ChangeMenu(2, target);
                            }}>Депозитная программа
                            </li>
                            <span id="point"/>
                        </ul>
                    </div>
                    <div className="wrapper">
                        {this.wrapper()}
                        <div className="btn_big" id="btn7" onClick={()=>{
                            window.open(main_link);
                        }}><div>СТАТЬ ПРЕДСТАВИТЕЛЕМ</div> <i className="icon-banknote"/></div>
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
                        <table>
                            <thead>
                            <tr>
                                <th>Мощность</th>
                                <th>СТОИМОСТЬ</th>
                                <th>ПРИБЫЛЬ, USD</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1 CRT</td>
                                <td>100.00 USD</td>
                                <td>208.05 USD</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case 1:
                return (
                    <div className="mining">
                        <table>
                            <thead>
                            <tr>
                                <th>ПУЛ</th>
                                <th>СТОИМОСТЬ ДОЛИ</th>
                                <th>ПРИБЫЛЬ, %</th>
                                <th>ПРИБЫЛЬ, USD</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><i className="icon-flag"/> START</td>
                                <td>100.00 USD</td>
                                <td>208.05%</td>
                                <td>208.05 USD</td>
                            </tr>
                            <tr>
                                <td><i className="icon-analytics-chart-graph"/> STANDARD</td>
                                <td>500.00 USD</td>
                                <td>227.34%</td>
                                <td>1,136.70 USD</td>
                            </tr>
                            <tr>
                                <td><i className="icon-chart-area"/> BUSINESS</td>
                                <td>2,500.00 USD</td>
                                <td>245.07%</td>
                                <td>6,126.75 USD</td>
                            </tr>
                            <tr>
                                <td><i className="icon-ribbon"/>PREMIUM</td>
                                <td>7,500.00 USD</td>
                                <td>278.44%</td>
                                <td>20,883.00 USD</td>
                            </tr>
                            <tr>
                                <td><i className="icon-crown-king-1"/>EXCLUSIVE</td>
                                <td>22,500.00 USD</td>
                                <td>292%</td>
                                <td>65,700.00 USD</td>
                            </tr>
                            <tr>
                                <td><i className="icon-briefcase"/>LEADER</td>
                                <td>62,500.00 USD</td>
                                <td>319.64%</td>
                                <td>199,775.00 USD</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case 2:
                return (
                    <div className="mining">
                        <table>
                            <thead>
                            <tr>
                                <th>ПАКЕТ</th>
                                <th>СТОИМОСТЬ ДОЛИ</th>
                                <th>ПРИБЫЛЬ, %</th>
                                <th>ПРИБЫЛЬ, USD</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>START GOLD</td>
                                <td>1000.00 USD</td>
                                <td>336%</td>
                                <td>3,360.00 USD</td>
                            </tr>
                            <tr>
                                <td>START GREEN</td>
                                <td>1,000.00 USD</td>
                                <td>252%</td>
                                <td>2,520.00 USD</td>
                            </tr>
                            <tr>
                                <td>STANDARD GOLD</td>
                                <td>5,000.00 USD</td>
                                <td>360%</td>
                                <td>18,000.00 USD</td>
                            </tr>
                            <tr>
                                <td>STANDARD BLACK</td>
                                <td>5,000.00 USD</td>
                                <td>300%</td>
                                <td>15,000.00 USD</td>
                            </tr>
                            <tr>
                                <td>STANDARD GREEN</td>
                                <td>5,000.00 USD</td>
                                <td>264%</td>
                                <td>13,200.00 USD</td>
                            </tr>
                            <tr>
                                <td>BUSINESS BLACK</td>
                                <td>25,000.00 USD</td>
                                <td>348%</td>
                                <td>87,000.00 USD</td>
                            </tr>
                            <tr>
                                <td>BUSINESS GREEN</td>
                                <td>25,000.00 USD</td>
                                <td>324%</td>
                                <td>81,000.00 USD</td>
                            </tr>
                            <tr>
                                <td>PREMIUM</td>
                                <td>125,000.00 USD</td>
                                <td>348%</td>
                                <td>435,000.00 USD</td>
                            </tr>
                            <tr>
                                <td>EXCLUSIVE</td>
                                <td>500,000.00 USD</td>
                                <td>360%</td>
                                <td>1,800,000.00 USD</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
        }
    }
}
