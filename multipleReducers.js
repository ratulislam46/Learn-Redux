const { createStore, combineReducers } = require("redux");

// CONSTANT 
const GET_PRODUCTS = "GETPRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_ITEMS = 'GET_ITEMS';
const ADD_ITEM = "ADD_ITEM"

// product reducer 
const initialProductState = {
    products: ['Sugar', "Salt"],
    NumberOfProducts: 2
}

// product reducer 
const initialItemsState = {
    items: ["Shirt", "Pant", "Watch"],
    NumberOfItems: 3
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

const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

const addItem = (items) => {
    return {
        type: ADD_ITEM,
        payload: items
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
            return state;
    }
};


// CART REDUCER
const cartReducer = (state = initialItemsState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }

        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
                NumberOfItems: state.NumberOfItems + 1,
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// STORE 
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(getProduct())
store.dispatch(addProduct("Banana"))

store.dispatch(getItems())
store.dispatch(addItem("Cap", "Jacket"));