import Task from "../Components/Task"

export function Reducer(state = {
    tasks: [
        { id: 1, name: 'task1', active: false },
        { id: 2, name: 'task2', active: false },
    ]
}, action) {
    switch (action.type) {
        case 'Add_Task':
            var arr = [...state.tasks]
            arr.push({
                id: state.tasks.length + 1,
                name: action.payload,
                active: false,
            })
            state = { ...state, tasks: arr }
            break
        case "toggleToCompleted":

            var arr = state.tasks.map((item, index) => {
                if (item.id === action.id) {
                    var item = { ...item, active: !item.active }
                }
                return item
            })
            state = { tasks: arr }
            break
        case 'delTasks':
            var tasks = state.tasks
            var Res = Task.splice(action.index, 1)
            state = {
                ...state,
                tasks: Res
            }

    }
    return state
}