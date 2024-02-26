import { addToDoListAction } from "./toDoList.action";

export function fetchActions(args, controller) {
    return function(dispatch) {
        fetch(`https://65cb5f6cefec34d9ed875d1a.mockapi.io/hw34/redux/ToDoAction`, {
            signal: controller.signal
        })
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }
                return resp.json();
            })
            .then(data => {
                console.log(data);
                const preparedData = data.map(el => ({
                    id: el.id,
                    name:  el.toDoName,
                }));
                dispatch(addToDoListAction(preparedData));
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    };
}