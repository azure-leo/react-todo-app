import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {ITodo} from "../../models/ITodo.ts";

interface TodoState {
    todos: ITodo[];
    waitingTodos: ITodo[];
    inProgressTodos: ITodo[];
    completedTodos: ITodo[];
    count: number
}

const initialState : TodoState = {
    todos: [],
    waitingTodos: [],
    inProgressTodos: [],
    completedTodos: [],
    count: 0
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // toggleTodoStatus: (state, action: PayloadAction<ITodo>) => {
        //
        // },
        addTodo: (state, action: PayloadAction<ITodo>) => {
            if (action.payload.status === 'В работе') {
                state.inProgressTodos.push(action.payload)
            }
        },
    }
})

export default todosSlice.reducer;