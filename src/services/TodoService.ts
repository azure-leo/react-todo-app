import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITodo} from "../models/ITodo.ts";

export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery(
        {baseUrl: "http://localhost:3000"}),
    tagTypes: ['Todo'],
    endpoints: (build) => ({
        fetchAllTodos: build.query<ITodo[], number>({
            query: (limit: number = 100) => ({
                url: '/todos',
                params: {
                    _limit: limit
                }
            }),
            // providesTags: result => ['Todo']
        }),
        createTodo: build.mutation<ITodo, ITodo>({
            query: ({title, description, status = 'Ожидание'}) => ({
                url: '/todos',
                method: 'POST',
                body: { title, description, status}
            }),
            invalidatesTags: ['Todo']
        }),
        updateTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['Todo']
        }),
        fetchTodosByStatus: build.query({
            query: (status) => `todos?status=${status}`
        }),
    })
})