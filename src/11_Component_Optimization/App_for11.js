import { useReducer, useState, useRef, useCallback } from "react";
import TodoTemplate from "../10_App_ScheduleManagement/TodoTemplate";
import TodoInsert from "../10_App_ScheduleManagement/TodoInsert";
import TodoList_for11 from "./TodoList_for11";

function createBulkTodos() {
    const array = [];
    for (let i =1 ; i <= 2500 ; i++){
        array.push({
            id : i,
            text : `할 일 ${i}`,
            checked : false,
        });
    }
    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT' :
            // {type : 'INSERT', todo : {id :1 text:'todo', checked : false} }
            return todos.concat(action.todo);
        case 'REMOVE' :
            // {type : 'REMOVE', id : 1}
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE' :
            return todos.map(todo =>
                todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
            );
        default :
            return todos;
    }
}

const App_for11 = () => {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    // 고유값으로 사용될 ID
    const nextId = useRef(2501);

    const onInsert = useCallback(
        text => {
            const todo = {
                id : nextId.current,
                text,
                checked : false,
            };
            dispatch({type : 'INSERT', todo});
            nextId.current += 1;
        },[]);

    const onRemove = useCallback(id => {
            dispatch({type : 'REMOVE', id});
        },[]);

    const onToggle = useCallback(id => {
        dispatch({type: 'TOGGLE', id});
    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList_for11 todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
};

export default App_for11;