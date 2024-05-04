import { useState } from "react";

const TodoApp=()=>{

    const[tasks,setTasks]=useState(
        {
            id:1,
            text:"waking up early in the morning",
            completed:false
        },
        {
            id:2,
            text:"bathing and brushing teeth",
            completed:true
        },
        {
            id:3,
            text:"studying",
            completed:false
        });

    const[text,setText]=useState("");
    const addTask=(text)=>{
        const newTask={
            id:Date.now,text,
            completed:false
        };
        setTasks([...tasks,newTask]);
        setText("");
    }
return(
    <div>
        <div>
            <input type="text" />
            <button onClick={()=>addTask(text)}>Add</button>
        </div>
    </div>
);
}
export default TodoApp;