import React from "react";

const TodoList = (props) => {
    return (
        <>
            <div className="todo_style" >
                <i className="fa fa-times" onClick={() => {
                    props.Select(props.id)
                }} aria-hidden="true" />
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default TodoList;