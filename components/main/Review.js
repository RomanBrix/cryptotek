import React, {Component} from 'react';
import '../../css/scss/review.scss';
import $ from 'jquery';

export default class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            slideNow: 1,
        }
    }
    nextSlide(){
        const {slideNow } = this.state;
        const slideCount = $('#slidewrapper').children().length;
        if (slideNow >= slideCount/3 || slideNow <= 0 || slideNow > slideCount) {
            $('#slidewrapper').css('transform', 'translate(0, 0)');
            this.setState({
                slideNow: 1
            })
            // slideNow = 1;
        } else {
            const translateWidth = -$('#viewport').width() * (slideNow);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            this.setState({
                slideNow: slideNow+1
            })
        }
    }

    prevSlide() {
        const {slideNow } = this.state;
        const slideCount = $('#slidewrapper').children().length;
    console.log(slideNow, slideCount);
        if (slideNow === 1 || slideNow <= 0 || slideNow >= slideCount ) {
            const translateWidth = -$('#viewport').width() * (slideCount - 9);

            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            this.setState({
               slideNow: slideCount/3
            });
            // slideNow = slideCount;
        } else {
          const translateWidth = -$('#viewport').width() * (slideNow - 2);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            this.setState({
                slideNow: slideNow-1
            });
            // slideNow--;
        }
    }

    render() {
        return (
            <div className="review">
                <div className="review-container">
                    <h1>ОТКРЫТИЕ ОФИСА В УКРАИНЕ</h1>
                    <p>
                        Мы не стоим на месте и активно развиваемся в других странах. В планах компании открытие
                        представительств в таких городах как Москва, Алматы и Берлин.
                    </p>
                    <div id="rew_slider">
                        <div id="viewport">
                            <ul id="slidewrapper">
                                <li className="slide">
                                    <iframe width="100%"  src="https://www.youtube.com/embed/0WSKdYtG20o" frameBorder="0" allowFullScreen/>
                                </li>
                                <li className="slide">
                                    <iframe width="100%"  src="https://www.youtube.com/embed/E44DehZQ-nw" frameBorder="0" allowFullScreen/>
                                </li>
                                <li className="slide"><img src="./src/slide3.jpg" alt="3" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide4.jpg" alt="4" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide5.jpg" alt="5" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide6.jpg" alt="6" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide7.jpg" alt="7" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide8.jpg" alt="8" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide9.jpg" alt="9" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide10.jpg" alt="10" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide11.jpg" alt="11" className="slide-img"/></li>
                                <li className="slide"><img src="./src/slide12.jpg" alt="12" className="slide-img"/></li>
                            </ul>
                        </div>
                        <div className="control">
                            <i className="icon-arrow-left" onClick={()=>{
                                this.prevSlide();
                            }}/>
                            <i className="icon-arrow-right" onClick={()=>{
                                this.nextSlide();
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
