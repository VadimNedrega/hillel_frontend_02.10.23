import {ADD_ACTION_INFO} from "./toDoInfo.action";

const initialState = {
  id: null,
  name: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTION_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}