const { createStore } = require("redux");

/**
 * STATE
 * DISPATCH - ACTION -> (type, payload)
 * REDUCER
 * STORE - getState(), dispatch(), subscribe()
 */

// defining const
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// state
const initialCounterState = {
	count: 0,
};

// action - Object - type, payload
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

const incrementByValue = value => {
	return {
		type: INCREMENT_BY_VALUE,
		payload: value,
	};
};

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
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

		case INCREMENT_BY_VALUE:
			return {
				...state,
				count: state.count + action.payload,
			};

		default:
			state;
	}
};

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
	console.log(store.getState());
});

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
store.dispatch(incrementByValue(5));
store.dispatch(incrementByValue(10));
