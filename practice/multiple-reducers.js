const { createStore, combineReducers } = require("redux");

// products const
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// cart const
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// products state
const initialProductState = {
	products: ["pen", "mobile"],
	productCount: 2,
};

// cart state
const initialCartState = {
	cart: ["pen"],
	productCount: 1,
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

// cart state
const getCart = () => {
	return {
		type: GET_CART,
	};
};

const addCart = product => {
	return {
		type: ADD_CART,
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

// cart reducer
const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case GET_CART:
			return {
				...state,
			};
		case ADD_CART:
			return {
				cart: [...state.cart, action.payload],
				productCount: state.productCount + 1,
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	productR: productReducer,
	cartR: cartReducer,
});

// product store
// const store = createStore(productReducer);
const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(getProducts());
store.dispatch(addProduct("soundBox"));
store.dispatch(getCart());
store.dispatch(addCart("mobile"));
