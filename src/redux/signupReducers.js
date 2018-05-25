export const SIGNUP = 'SIGNUP'

export const userSignup = (newuser) => ({type:SIGNUP, payload:newuser})

export default (state={}, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return {...state, signUP:action.payload}
            break;
        default:
            return state;
    }
}