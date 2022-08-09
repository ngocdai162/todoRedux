

const inittialValue = [];

const rootReducer = (state=inittialValue,action)=> {
    console.log(action.payload)
    switch (action.type) {
        case 'ADD_TODO': [
            ...state,
            action.payload
        ]
        default: 
            return state;

    }
}
export default rootReducer;