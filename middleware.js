const { createStore } = require("redux");

// CONSTANT
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"


const initialProduct = {
    book: ["Bangla", "English"],
    numberOfBooks: 2
};


const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProduct = (items) => {
    return {
        type: ADD_PRODUCT,
        payload: items
    }
}

// PRODUCTS REDUCER 
const productReducer = (state = initialProduct, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state };

        case ADD_PRODUCT:
            return {
                ...state,
                book: [...state.book, action.payload],
                numberOfBooks: state.numberOfBooks + 1
            }

        default:
            state;
    }
}

// STORE 
const store = createStore(productReducer)
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProduct("Physics"))