import {createStore, applyMiddleware, combineReducers} from 'redux'

//import the reducwes
import loginReducers from './redux/loginReducers';
import counterReducers from './redux/counterReducers';


//combine all the reducers
const reducer = combineReducers({
    login: loginReducers,
    counter: counterReducers
})

//Store
var store = createStore(reducer)
export default store;