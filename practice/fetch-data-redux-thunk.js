/**
 * async actions api calling
 * api url - https://jsonplaceholder.typicode.com/todos
 * middleware - redux-thunk
 * axios api
 */

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// todos const
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const TODOS_URL = "https://jsonplaceholder.typicode.com/users";

// todos state
const initialTodoState = {
	todos: [],
	isLoadng: false,
	error: null,
};

// todos actions
const getTodosRequest = () => {
	return {
		type: GET_TODOS_REQUEST,
	};
};

const getTodosFailed = error => {
	return {
		type: GET_TODOS_FAILED,
		payload: error,
	};
};

const getTodosSuccess = todos => {
	return {
		type: GET_TODOS_SUCCESS,
		payload: todos,
	};
};

// todos reducer
const todosReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case GET_TODOS_REQUEST:
			return {
				...state,
				isLoadng: true,
			};
		case GET_TODOS_SUCCESS:
			return {
				...state,
				isLoadng: false,
				todos: action.payload,
			};
		case GET_TODOS_FAILED:
			return {
				...state,
				isLoadng: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

// fetching data
const fetchData = () => {
	return dispatch => {
		dispatch(getTodosRequest());
		axios
			.get(TODOS_URL)
			.then(res => {
				const users = res.data;
				const name = users.map(user => user.name);
				dispatch(getTodosSuccess(name));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(getTodosFailed(errorMessage));
			});
	};
};

// store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchData());
