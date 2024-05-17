import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import { BsCheckLg } from "react-icons/bs";

const App=()=>{
  const [isCompleteScreen,  setIsCompleteScreen]= useState(false)
  const [allTodo,setTodo]=useState([]);
  const [newTitle,setNewTitle]=useState("");
  const [newDescription,setNewDescription]=useState("");

  const handleAdd=()=>{
       let newItem={
        title:newTitle,
        description:newDescription
       }
       let updatedTodo=[...allTodo];
       updatedTodo.push(newItem);
       setTodo(updatedTodo);
       localStorage.setItem('todolist',JSON.stringify(updatedTodo));
  }


  const handleDelete=(index)=>{
    let reducedTodo=[...allTodo];
    reducedTodo.splice(index,1);
    localStorage.setItem('todolist',JSON.stringify(reducedTodo));
    setTodo(reducedTodo);
  }


  useEffect(()=>{
    let savedTodo=JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodo(savedTodo);
    }
  })


return(
  <>
    <div className="App">
        <h1>MY TODOS</h1>
           <div className="todo-wrapper">
             <div className="todo-input">
                   <div className="todo-input-item">
                    <label>Title</label>
                    <input type="text"
                     value={newTitle} 
                     onChange={(e)=>setNewTitle(e.target.value)}
                     placeholder="What's the task's Title" />
                   </div>
                   <div className="todo-input-item">
                    <label>Description</label>
                    <input 
                    type="text"
                    value={newDescription}
                    onChange={(e)=>setNewDescription(e.target.value)}
                     placeholder="What's the task's Description" />
                   </div>
                   <div className="todo-input-item">
                    <button 
                    type='button' 
                    className="primaryBtn"
                    onClick={handleAdd}
                    >Add</button>
                   </div>

             </div>
             <div class="btn-area">
                    <button 
                    className={`secondaryBtn ${isCompleteScreen===false && "active"}`}
                    onClick={()=>setIsCompleteScreen(false)}
                    >Todo</button>
                    <button 
                    className={`secondaryBtn ${isCompleteScreen===true && "active"}`}
                    onClick={()=>setIsCompleteScreen(true)}
                    >Completed</button>
             </div>
               <div className="todo-list">
                 {allTodo.map((item,index)=>{
                  return(
                    <div className="todo-list-item" key={index}>
                       <div>
                          <h3>{item.title}</h3>
                          <p>{item.description} </p>
                      </div>
                        <div>
                          <AiOutlineDelete   className="icon"  onClick={()=>handleDelete(index)} title="delete?"/>
                          <BsCheckLg className="check-icon"  title="complete?"/>
                       </div>
                    </div>
                  
                  )
                 })}
              </div>
           </div>
    </div>
  </>
)
}
export default App;