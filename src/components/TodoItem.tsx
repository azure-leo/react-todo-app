import React from 'react';
import {ITodo} from "../models/ITodo.ts";

interface TodoItemnProps {
    todo: ITodo,
    toggleStatus: (todo: ITodo) => void
}

const TodoItem : React.FC<TodoItemnProps> = ({todo, toggleStatus}) => {
    // const {data: todos} = todoAPI.useFetchAllTodosQuery(15)

    let isWaitingActivee = todo.status === 'Ожидание'
    let isInProgressActivee = todo.status === 'В работе'
    let isDoneActivee = todo.status === 'Выполнено'

    const handleToggleStatus = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation()
        if(event.currentTarget.innerText === 'Ожидание') {
            isWaitingActivee = true
            isDoneActivee = false
            isInProgressActivee = false
        } else if(event.currentTarget.innerText === 'В работе') {
            isInProgressActivee = true
            isDoneActivee = false
            isWaitingActivee = false
        } else if(event.currentTarget.innerText === 'Выполнено') {
            isDoneActivee = true
            isInProgressActivee = false
            isWaitingActivee = false
        }

        const status = event.currentTarget.innerText || ""

        toggleStatus({...todo, status})
    }

    return (
        <div className="todo">

            <div className="todo__list__description">
                <div className={"todo__list__badge__container"}>
                    <span  onClick={handleToggleStatus} className={`todo__list__badge todo__waiting 
                ${isWaitingActivee ? 'active' : ''}`}>Ожидание</span>
                    <span onClick={handleToggleStatus} className={`todo__list__badge todo__waiting 
                ${isInProgressActivee ? 'active' : ''}`}>В работе</span>
                    <span onClick={handleToggleStatus} className={`todo__list__badge todo__waiting 
                ${isDoneActivee ? 'active' : ''}`}>Выполнено</span>

                </div>

            </div>
            <div>
                {todo.id}. {todo.title}. {todo.description}
            </div>
            <div>
                <button>Delete </button>
            </div>
        </div>
    );
};

export default TodoItem;