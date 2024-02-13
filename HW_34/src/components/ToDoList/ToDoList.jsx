import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {clearToDoListAction, markToDoAsDone, removeAction, selectActions} from "../../store";

export function ToDoList() {
  const { actions } = useSelector(selectActions);
  const dispatch = useDispatch();

  if (!actions.length) return <p>You dont have actions</p>;
  return (
      <ul style={{listStyle: 'none'}}>
          {actions.map((action) => (
              <li key={action.id} style={{marginBottom: '10px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                      <div style={{width: '150px'}}>{action.name}</div>
                      <div style={{marginLeft: '10px'}}>
                          <button style={{marginLeft: '5px'}} onClick={() => dispatch(markToDoAsDone(action.id))}>
                              Mark as done
                          </button>
                          <button style={{marginLeft: '5px'}} onClick={() => dispatch(removeAction(action.id))}>
                              Remove action
                          </button>
                      </div>
                  </div>
              </li>
          ))}
          <li>
              <button onClick={() => dispatch(clearToDoListAction())}>
                  Clear actions
              </button>
          </li>
      </ul>
  );
}