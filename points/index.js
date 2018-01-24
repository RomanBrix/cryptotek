import React from 'react';
import {render} from 'react-dom';
import App from '../components/main';
import 'normalize.css';
import '../css/scss/main.scss';

const init = document.getElementById('mountNode');
render(<App/>, init);
