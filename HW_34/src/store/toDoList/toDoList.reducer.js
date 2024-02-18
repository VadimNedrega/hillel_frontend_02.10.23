import {ADD_ACTION, ADD_ACTIONS, CLEAR_ACTIONS, MARK_AS_DONE_ACTION, REMOVE_ACTION} from "./toDoList.action";

const initialState = {
  actions: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTION: {
      return {
        ...state,
        actions: [...state.actions, { id: action.payload.id, name: action.payload.name, done: false }],
      };
    }
    case ADD_ACTIONS: {
      return {
        ...state,
        actions: [...state.actions, ...action.payload.map(action => ({ ...action, done: false }))],
      };
    }
    case REMOVE_ACTION: {
      return {
        ...state,
        actions: state.actions.filter(el => el.id !== action.payload),
      };
    }
    case MARK_AS_DONE_ACTION: {
      return {
        ...state,
        actions: state.actions.map(el => {
          if (el.id === action.payload) {
            return {
              ...el,
              done: true,
            };
          }
          return el;
        }),
      };
    }
    case CLEAR_ACTIONS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}