import { combineReducers } from 'redux';
//import {intReducer} from 'react-intl-redux'
import {languageReducer as language} from '../../app/containers/language';


const rootReducer = combineReducers({
  language,
});
export default rootReducer;