/**
 * state
 * action
 * reducer
 * store
 */

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// initial state
const initialState = {
	count: 0,
};

// action
const incrementCounter = () => {
	return {
		type: INCREMENT,
	};
};

const decrementCounter = () => {
	return {
		type: DECREMENT,
	};
};

const resetCounter = () => {
	return {
		type: RESET,
	};
};

// create reducer
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};

		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		case RESET:
			return {
				...state,
				count: 0,
			};

		default:
			state;
	}
};

// store
const store = createStore(counterReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter());
