import React, {useState} from 'react';
import {ITodo} from "../models/ITodo.ts";

interface TodoItemnProps {
    todo: ITodo,
    toggleStatus: (todo: ITodo) => void
}

const TodoItem : React.FC<TodoItemnProps> = ({todo, toggleStatus}) => {

    const [isWaitingActive, setWaitingIsActive] = useState(todo.status === 'Ожидание');
    const [isInProgressActive, setInProgressIsActive] = useState(todo.status === 'В работе');
    const [isDoneActive, setDoneIsActive] = useState(todo.status === 'Выполнено');

    // let isWaitingActivee = todo.status === 'Ожидание'
    // let isInProgressActivee = todo.status === 'В работе'
    // let isDoneActivee = todo.status === 'Выполнено'

    const handleToggleStatus = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation()
        if(event.currentTarget.innerText === 'Ожидание') {
            setWaitingIsActive(true)
            setDoneIsActive(false)
            setInProgressIsActive(false)
        } else if(event.currentTarget.innerText === 'В работе') {
            setInProgressIsActive(true)
            setDoneIsActive(false)
            setWaitingIsActive(false)
        } else if(event.currentTarget.innerText === 'Выполнено') {
            setDoneIsActive(true)
            setInProgressIsActive(false)
            setWaitingIsActive(false)
        }

        const status = event.currentTarget.innerText || ""

        toggleStatus({...todo, status})
    }

    return (
        <div className="todo">

            <div className="todo__list__description">
                <div className={"todo__list__badge__container"}>
                    <span  onClick={handleToggleStatus} className={`todo__list__badge todo__waiting 
                ${isWaitingActive ? 'active' : ''}`}>Ожидание</span>
                    <span onClick={handleToggleStatus} className={`todo__list__badge todo__waiting 
                ${isInProgressActive ? 'active' : ''}`}>В работе</span>
                    <span onClick={handleToggleStatus} className={`todo__list__badge todo__waiting 
                ${isDoneActive ? 'active' : ''}`}>Выполнено</span>

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