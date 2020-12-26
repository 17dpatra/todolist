import React, {useState} from "react";

//keeps track of our todo state through a form
const Form = () => {
    const [todo, setTodo] = useState({
        id: "",
        task: "", //text describing the todo
        completed: false //keeps track of whether the task has been completed
    });

    //handles when user types a todo to keep track of it
    function handleInputChange(e) {
        //pass new object with old todo property and update task with user's input
        setTodo({...todo, task: e.target.value});
    }

    return (
        <form>
            <input name="task" type="text" onChange={handleInputChange} value={todo.task}/>
            <button />
        </form>
    );
}

export default Form;