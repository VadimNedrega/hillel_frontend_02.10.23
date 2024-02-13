import { addToDoListAction } from "./toDoList.action";

export function fetchActions(args, controller) {
    return async function fetchActionsThunk(dispatch) {
        const resp = await fetch(`https://65cb5f6cefec34d9ed875d1a.mockapi.io/hw34/redux/ToDoAction`, {
            signal: controller.signal
        });
        const data = await resp.json();

        console.log(data)

        if (data){
            const preparedData = data.map(el => ({
                id: el.id,
                name:  el.toDoName,
            }))

            dispatch(addToDoListAction(preparedData))
        }  else {
            console.error("Error fetching data", data);
        }
    }
}