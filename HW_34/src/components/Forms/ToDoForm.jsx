import React, { useRef } from "react";
import {useDispatch} from "react-redux";
import {ADD_ACTION_INFO, addToDoAction} from "../../store";

export function ToDoForm() {
  const nameRef = useRef();
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();

    if (!nameRef.current.value) {
      console.warn("invalid value");
      return;
    }
    const preparedData = {
      id: new Date().getTime(),
      [nameRef.current.name]: nameRef.current.value,
    };

    dispatch({ type: ADD_ACTION_INFO, payload: preparedData})
    dispatch(addToDoAction(preparedData))
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={nameRef} name="name" />
      <button>Add to do Action</button>
    </form>
  );
}