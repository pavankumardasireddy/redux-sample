import {createStore} from 'redux'

// Declare types
export const INCREMENT =  'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

// Action creators 

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
   return {
       type: DECREMENT
   }
}
export function reset() {
    return {
        type: RESET
    }
}
//Reducers 
var counter= function(state=0, action) {
    switch(action.type) {
        case INCREMENT:
            return state+1;
            break;
        case DECREMENT:
            return state-1;
            break;
        case RESET:
            return state=0;
        default: 
            return state;
    }
}

//Store
var store = createStore(counter)
export default store;