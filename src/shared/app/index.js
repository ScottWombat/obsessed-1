import React,{Component} from 'react';
import {render} from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routesConfig from '../config';
import rootReducer from '../reducer';
import { connect, Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl'
 
import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'

//import App from '../../app/components/main'

//import Store from '../configureStore';
 
// ========================================================
// Internationalization
// ========================================================
//addLocaleData([...en, ...it])
//let mapStateToProps = (state) => { 
//    return { 
//        locale: state.i18n.locale, 
//        messages: state.i18n.messages 
//    } }

//let ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider)

const store = createStore(rootReducer, window.__INITIAL_STATE__, applyMiddleware(thunk));
//const store = createStore(reducers, window.__INITIAL_STATE__, applyMiddleware(thunk));
//const store = Store();
//console.log(">>>>>>>>>>f" + store.getState());
/*
const App2 = () => {
  return (
    <Provider store={store}>
      <IntlProvider>
        <BrowserRouter>
            {renderRoutes(routesConfig)}
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  )
}
*/
class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <IntlProvider>
                        <BrowserRouter>
                        {renderRoutes(routesConfig)}
                        </BrowserRouter>
                </IntlProvider>
            </Provider>
        );
    }
};
window.onload = () => {
  
            render( <App />, document.querySelector('#app'));
}