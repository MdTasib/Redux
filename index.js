// defining const
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
	counter: 0,
};

const initialUsersState = {
	users: [{ name: "Mohammad Tasib" }],
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

const addUser = () => {
	return {
		type: ADD_USER,
		payload: { name: "Rafi" },
	};
};
