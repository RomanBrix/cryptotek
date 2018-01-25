import React, {Component} from 'react';
import '../../css/scss/footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="ua">
                        <ul>
                            <li>Офис в Украине</li>
                            <li>Г. Хмельницкий Заречанская 3/1</li>
                            <li>Г. Киев (скоро открытие)</li>
                        </ul>
                    </div>
                    <div className="usa">
                        <ul>
                            <li>Офис в США</li>
                            <li>100 International Drive MD Baltimore</li>
                            <li>Maryland, 21202 USA</li>
                        </ul>
                    </div>
                    <div className="ch">
                        <ul>
                            <li>Офис в Китае</li>
                            <li>1 Austin Road West, Гонконг, <br/>Китай (West Kowloon)</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
