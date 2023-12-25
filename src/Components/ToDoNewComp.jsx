import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import icon from "./../assets/icon.png";

import edit from "./../assets/edit.png";
import dlt from "./../assets/delete.png"

let count = 0;
export default function ToDoNewComp() {

    const uuid = uuidv4()


    const [task, setTask] = useState("")
    const [addTask, setAddTask] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleAdd = () => {
        setAddTask([...addTask, { id: uuid, tasks: task }])
        setTask("")
    }

    const handleUpdate = (i) => {

        let newValue = prompt("Modify the task", addTask[i].tasks)
        // !This logic is bit confusing
        let copiedValue = [...addTask]

        copiedValue[i].tasks = newValue
        // ! Forgot to pass the copiedValue to setAddTask.
        setAddTask(copiedValue)
    }
    
    const handleDelete = (idValue) => {
        console.log(idValue);
        const filterData = addTask.filter((e) => {
            console.log(e);
            // ! Need to return the values..I forgot it
            return e.id !== idValue
        })

        setAddTask(filterData)
    }



    count++


    return (

        <>
        <div className="mainContainer">
            <div className="toDoHeading">
            <h1>To-Do List</h1>
            <img src={icon}/>
            </div>
            <div className="inputCont">
            <input type="text" value={task} placeholder="Enter tour Task" onChange={(e) => handleChange(e)} />
            <button onClick={handleAdd} className="addButton">Add </button>
            </div>
         
            {addTask.map((e, i) => (
                // {always missing the round braces in map}

                <div key={e.id} className="listCont">
                    <p>⭕ {e.tasks}</p>

                    {/* {How handleUpdate takes I as a paremeter without passing them} */}
                    <div>
                    <img onClick={() => handleUpdate(i)} src={edit}/>
                    <img onClick={() => handleDelete(e.id)} src={dlt}/>
                    {/* <button onClick={() => handleUpdate(i)}>Update</button> */}
                    {/* <button onClick={() => handleDelete(e.id)}>Delete</button> */}
                    </div>
                </div>

            ))}
         
            {/* <button>RenderCount:{count}</button> */}
            <div>
                
            </div>
            </div>

        </>
    )
}