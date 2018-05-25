export const USER = 'USER';

export const submit = (data)=> ({type: USER, payload:data})

export default (state= {}, action) => {
    switch (action.type) {
        case 'USER':
            return {...state, user:action.payload};
            break;
        default:
            return state;
    }
}