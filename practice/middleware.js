/**
 * Middleware | redux-logger
 */

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// products const
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// products state
const initialProductState = {
	products: ["pen", "mobile"],
	productCount: 2,
};

// products action
const getProducts = () => {
	return {
		type: GET_PRODUCTS,
	};
};

const addProduct = product => {
	return {
		type: ADD_PRODUCT,
		payload: product,
	};
};

// products reducer
const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
			};
		case ADD_PRODUCT:
			return {
				products: [...state.products, action.payload],
				productCount: state.productCount + 1,
			};
		default:
			return state;
	}
};

// product store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => console.log(store.getState()));

store.dispatch(getProducts());
store.dispatch(addProduct("soundBox"));
