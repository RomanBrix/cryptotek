import React, {Component} from 'react';
import '../../css/scss/profitable.scss';
import {main_link} from "../URL";

export default class Profitable extends Component {
    render() {
        return (
            <div className="profitable">
                <div className="profitable-container">
                    <h1>Почему выгодно активно работать с Сryptotek</h1>
                    <p>
                        Мы предоставляем вам возможность развиваться как личность, зарабатывать и учится, мы даем вам
                        возможность стать успешным, богатым и независимым! Мы постоянно обучаем наших партнеров,
                        проводим вебинары, лидершипы и конкурсы. Не знаете с чего начать? Мы создали организационную
                        структуру, в которой помогать друг другу - выгодно! Оставьте заявку на сайте и наши менеджеры
                        подскажут вам как действовать. Стройте свою команду, зарабатывайте и открывайте свой бизнес!
                    </p>
                    <h2>Партнерская программа</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>СТУПЕНЬ (УРОВЕНЬ)</th>
                            <th>ОБОРОТ</th>
                            <th>ПРЕМИЯ</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>JUNIOR ASSISTANT (5%)</td>
                            <td>0 USD</td>
                            <td>0 USD</td>
                        </tr>
                        <tr>
                            <td>SENIOR ASSISTANT (7%)</td>
                            <td>2,000 USD</td>
                            <td>50 USD</td>
                        </tr>
                        <tr>
                            <td>JUNIOR MANAGER (9%)</td>
                            <td>12,000 USD</td>
                            <td>500 USD</td>
                        </tr>
                        <tr>
                            <td>MIGGLE MANAGER (10%)</td>
                            <td>50,000 USD</td>
                            <td>2,000 USD</td>
                        </tr>
                        <tr>
                            <td>SENIOR MANAGER (11%)</td>
                            <td>100,000 USD</td>
                            <td>5,000 USD</td>
                        </tr>
                        <tr>
                            <td>JUNIOR DIRECTOR (12%)</td>
                            <td>500,000 USD</td>
                            <td>20,000 USD</td>
                        </tr>
                        <tr>
                            <td>MIDDLE DIRECTOR (13%)</td>
                            <td>1,000,000 USD</td>
                            <td>50,000 USD</td>
                        </tr>
                        <tr>
                            <td>SENIOR DIRECTOR (13.5%)</td>
                            <td>3,000 000 USD</td>
                            <td>150,000 USD</td>
                        </tr>
                        <tr>
                            <td>TEAM LEADER (14%)</td>
                            <td>10,000,000 USD</td>
                            <td>500,000 USD</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="btn_big" id="btn8" onClick={()=>{
                        window.open(main_link);
                    }}><div>СТАТЬ ПРЕДСТАВИТЕЛЕМ</div> <i className="icon-banknote"/></div>
                </div>
            </div>
        )
    }
}
