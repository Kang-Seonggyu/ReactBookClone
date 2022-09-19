import React, {useCallback} from "react";
import { List } from 'react-virtualized'
import TodoListItem_for11 from "./TodoListItem_for11";
import '../10_App_ScheduleManagement/TodoList.css'

const TodoList_for11 = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({index,key,style}) => {
            const todo = todos[index];
            return (
                <TodoListItem_for11
                    todo={todo}
                    key = {key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style = {style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );
    return (
        <List
            className = "TodoList"
            width ={512}
            height={513}
            rowCount = {todos.length}
            rowHeight = {57}
            rowRenderer = {rowRenderer}
            list = {todos}
            style = {{outline : 'none'}}
        />
    );
};

export default React.memo(TodoList_for11);