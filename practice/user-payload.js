const { createStore } = require("redux");

const ADD_USER = "ADD_USER";

// state
const initialState = {
	count: 1,
	users: ["Ohidul"],
};

// action
const addUser = user => {
	return {
		type: ADD_USER,
		payload: user,
	};
};

// create reducer
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				users: [...state.users, action.payload],
				count: state.count + 1,
			};

		default:
			state;
	}
};

// store
const store = createStore(userReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addUser("Rafi"));
store.dispatch(addUser("Tasib"));
