import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";


const Todos = () => {
    const todos
        = useSelector(state => state.todos);

    const [todo, setTodo] = useState({do: ''}); //create to-do local state variable


    const dispatch = useDispatch();
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }



    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }




    const  todoChangeHandler = (event) => {  // handle keystroke changes in input field
        const doValue = event.target.value; // get data from input field

        const newTodo= {                 // create new todo object instance

            do: doValue                 // setting the todo's do property

        };
        setTodo(newTodo);              // change local state todo variable


    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">




                    <input
                        onChange={todoChangeHandler}                                    // add a new line item at the top
                                                                                       // update field with latest state value
                        value={todo.do}                                                  // containing an input field to type todo  // handle keystrokes to update component state
                        className="form-control w-75"/>


                    <button onClick={createTodoClickHandler}                                      // new button to add new todo
                            className="btn btn-primary w-25                                     // calls function to handle click event
                          float-end">
                        Create</button>

                </li>

                {
                    todos.map((todo, index) =>
                                  <li key={todo._id}
                                      className="list-group-item">
                                      <button onClick={() =>
                                          deleteTodoClickHandler(index)}
                                              className="btn btn-danger
                      float-end ms-2">
                                          Delete
                                      </button>

                                      <input type="checkbox"
                                             checked={todo.done}
                                             onChange={() =>
                                                 toggleTodoDone(todo)}
                                             className="me-2"/>

                                      {todo.do}


                                  </li>
                    )
                }

            </ul>
        </>
    );
};
export default Todos;

