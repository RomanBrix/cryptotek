import React, {Component} from 'react';
import '../../css/scss/how.scss';
import { main_link } from '../URL';

export default class How extends Component {
    render() {
        return (
            <div className="how">
                <div className="how-container">
                    <h1>Как зарабатывать с Сryptotek?</h1>
                    <p>
                        21 век - время, когда для того чтобы зарабатывать, нужно работать не с утра до ночи, а головой.
                        Сегодня большинство операций выполняют машины. Мы верим в то, что через пару десятков лет,
                        тяжелый физический труд полностью будет переложен на машины и роботов. Для того что бы
                        зарабатывать на криптовалюте, вам не обязательно иметь свои криптофермы, или торговать на бирже.
                        Компания Сryptotek дает возможность купить долю в компании и получать пассивный доход.
                    </p>
                </div>

                <div className="prcnt">
                    <div className="prcnt-container">
                        <div className="block left">
                            <i/>
                            <h2>ПАРТНЕРСКАЯ ПРИБЫЛЬ</h2>
                            <div className="op">15%</div>
                        </div>
                        <div className="btn_big" id="btn3" onClick={()=>{
                            window.open(main_link);
                        }}>
                            <div>СТАТЬ ПРЕДСТАВИТЕЛЕМ</div>
                            <i className="icon-banknote"/>
                        </div>
                        <div className="block right">
                            <i/>
                            <h2>ПАССИВНЫЙ ДОХОД В МЕСЯЦ</h2>
                            <div className="op">25%</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
