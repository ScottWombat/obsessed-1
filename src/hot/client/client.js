import React,{Component} from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routesConfig from '../../shared/config';
import rootReducer from '../../shared/reducer';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import it from 'react-intl/locale-data/it';

addLocaleData([...en, ...it]);

//import App from '../../app/components/main'


const store = createStore(rootReducer, window.__INITIAL_STATE__, applyMiddleware(thunk));

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
    
    render( 
                <AppContainer>
                <App />
                </AppContainer>,
                document.querySelector('#app')
    );
    
    if (module.hot) {
            module.hot.accept(App, () => {
                        render(
                            <AppContainer>
                            <App />
                            </AppContainer>,
                        document.querySelector('#app')
            );
        });
    }
    
            
}




