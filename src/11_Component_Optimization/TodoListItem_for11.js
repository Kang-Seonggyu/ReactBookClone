import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from "react-icons/md";
import cn from 'classnames';
import './TodoListItem_for11.css'

const TodoListItem_for11 = ({todo, onRemove, onToggle}) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem" >
            <div className={cn('checkbox',{ checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

// 11장에서 React.memo 추가
export default React.memo(TodoListItem_for11);