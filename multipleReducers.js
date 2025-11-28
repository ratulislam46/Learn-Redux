const { createStore } = require("redux");

// CONSTANT 
const GET_PRODUCTS = "GETPRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT"

// product reducer 
const initialProductState = {
    products: ['Sugar', "Salt"],
    NumberOfProducts: 2
}

const getProduct = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

// PRODUCTS REDUCER 
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                NumberOfProducts: state.NumberOfProducts + 1
            }

        default:
            state;
    }
};


// cart reducer 

// STORE 
const store = createStore(productReducer)
store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(getProduct())
store.dispatch(addProduct("Banana")) 
