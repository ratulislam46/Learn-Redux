//State
//Action = (type, payload)
//reducer
//store

const { createStore } = require("redux");

// CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";


// CREATE STATE 
const initialState = {
    count: 0
}

// CREATE ACTION 
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    };
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT
    };
}
const resetCounterAction = () => {
    return {
        type: RESET
    };
}

// CREATE REDUCTER 
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:

            return {
                ...state,
                count: state.count + 1
            };

        case DECREMENT:

            return {
                ...state,
                count: state.count - 1
            };

        case RESET:

            return {
                ...state,
                count: 0
            }

        default:
            state;
    }
};

// CREATE STORE 
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())
