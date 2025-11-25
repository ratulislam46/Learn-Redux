//State
//Action = (type, payload)
//reducer
//store

const { createStore } = require("redux");

//CONSTANTS 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const ADD_USER = 'ADD_USER';

const initialState = {
    count: 1,
    users: ['Shawon']
};

//CREATE ACTION
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
};

const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
};

const resetCounterAction = () => {
    return {
        type: RESET
    }
};

//CREATE PAYLOAD
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const addUser = (value) => {
    return {
        type: ADD_USER,
        payload: value
    }
};

// CREATE REDUCER 
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
            };

        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            };

        case ADD_USER:
            return {
                count: state.count + 1,
                users: [...state.users, action.payload]
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

// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(resetCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(incrementCounterByValue(5))
// store.dispatch(incrementCounterByValue(15))
store.dispatch(addUser('Tamanna'))
store.dispatch(addUser('Maria'))
store.dispatch(addUser('Lamia'))
store.dispatch(addUser('Midul'))