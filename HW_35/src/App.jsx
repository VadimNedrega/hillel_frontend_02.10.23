import React, { useEffect } from "react";
import { ToDoForm, ToDoList } from "./components";
import { useDispatch } from "react-redux";
import { fetchActions } from "./service";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchActions("some argument", controller));

    return () => {
      controller.abort();
    };
  }, [dispatch]);
  return (
    <div>
      <h1>Hello redux</h1>
      <h2>Add to do action</h2>
      <ToDoForm />
      <h3>To Do list</h3>
      <ToDoList />
    </div>
  );
}
