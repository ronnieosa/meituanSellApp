import React from 'react'
import {render} from 'react-dom';
import { hashHistory } from 'react-router'

import RooterMap from './route/RouterMap'
import '../static/css/reset.less'
import '../static/css/style.less'

render(<RooterMap history={hashHistory}/>,document.getElementById('root'));


