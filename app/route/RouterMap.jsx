import React from 'react'
import { Router,Route,IndexRoute} from 'react-router'
import { Provider } from 'react-redux'
import configStore from '../store/configStore'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import NotFound from '../containers/404'

const store = configStore();

class RouterMap extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Router history={this.props.history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home} />
                        <Route path="/city" component={City} />
                        <Route path="/user" component={User} />
                        <Route path="/login(/:router)" component={Login} />
                        <Route path="/search/:category(/:keyword)" component={Search} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path="*" component={NotFound} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}
export default RouterMap
