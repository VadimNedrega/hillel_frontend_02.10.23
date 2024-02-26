export const ADD_ACTION = "ADD_ACTION";
export const ADD_ACTIONS = "ADD_ACTIONS";
export const REMOVE_ACTION = "REMOVE_ACTION";
export const CLEAR_ACTIONS = "CLEAR_ACTIONS";
export const MARK_AS_DONE_ACTION = "MARK_AS_DONE_ACTION";

export const addToDoAction = (action) => ({ type: ADD_ACTION, payload: action });
export const addToDoListAction = (actions) => ({ type: ADD_ACTIONS, payload: actions });
export const clearToDoListAction = () => ({ type: CLEAR_ACTIONS });
export const markToDoAsDone = (id) => ({ type: MARK_AS_DONE_ACTION, payload: id });
export const removeAction = (id) => ({ type: REMOVE_ACTION, payload: id });