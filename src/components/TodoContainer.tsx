import {todoAPI} from "../services/TodoService.ts";
import TodoItem from "./TodoItem.tsx";
import {ITodo} from "../models/ITodo.ts";
import {useEffect, useState} from "react";

const TodoContainer = () => {
    const [newTodo, setNewTodo] = useState(
        {title: '', description: '', status: 'Ожидание'})
    const {data: todos} = todoAPI.useFetchAllTodosQuery(100)
    const [createTodo, {}] = todoAPI.useCreateTodoMutation()

    const [updateTodo, {}] = todoAPI.useUpdateTodoMutation()

    const [completedTodosCount, setCompletedTodosCount] = useState(0);

    useEffect(() => {
        if (todos) {
            const count = todos.filter((todo) => todo.status === 'Выполнено').length;
            setCompletedTodosCount(count)
        }
    }, [todos]);


    const handleCreate = async () => {
        if (newTodo.title.length <= 30) {
            await createTodo(newTodo as ITodo)
        }
        newTodo.title = ""
        newTodo.description = ""
    }

    const handleToggleStatus = (todo: ITodo) => {
        updateTodo(todo)
    }

    return (
        <div>
            <div className="todo__create">
                <input
                       className="todo__create__text-input"
                       type="text"
                       placeholder="Новая задача"
                       value={newTodo.title}
                       onChange={(e) => setNewTodo({...newTodo,
                        title: e.target.value
            })}/>
                <input
                       className="todo__create__text-input"
                       type="text"
                       placeholder="Описание задачи"
                       value={newTodo.description}
                       onChange={(e) => setNewTodo({
                           ...newTodo,
                           description: e.target.value
                       })}
                />
            </div>
            <div className="todo__counter">
                Выполнено задач: {completedTodosCount}
            </div>
            <div className="todo__list">
                <button onClick={handleCreate}>Добавить новую задачу</button>
                {todos && todos.map(todo =>
                    <TodoItem toggleStatus={handleToggleStatus} key={todo.id} todo={todo}/>
                )}

            </div>
        </div>
    );
};

export default TodoContainer;