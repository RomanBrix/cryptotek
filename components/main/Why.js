import React, {Component} from 'react';
import '../../css/scss/why.scss';

export default class Why extends Component {
    render(){
        return(
            <div className="why">
                <div className="why-container">
                    <h1>Почему выгодно инвестировать с Сryptotek</h1>
                    <div className="item">
                        <div className="one">
                            <i/>
                            <p>Надежность - на все открытые виды инвестиций предусмотрен страховой фонд</p>
                        </div>
                        <div className="two">
                            <i/>
                            <p>Высокая доходность - окупаемость вклада всего за 5 месяцев</p>
                        </div>
                        <div className="three">
                            <i/>
                            <p>Долгосрочность и стабильность - наши основные приоритеты</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
