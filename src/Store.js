import {createStore, applyMiddleware, combineReducers} from 'redux'

//import the reducwes
import loginReducers from './redux/loginReducers';
import counterReducers from './redux/counterReducers';
import signupReducers from './redux/signupReducers';

//combine all the reducers
const reducer = combineReducers({
    login: loginReducers,
    counter: counterReducers,
    newUserData: signupReducers
})

//Store
var store = createStore(reducer)
export default store;