import { useState } from "react";
const TodoApp=()=>{
    const [items,setItems]=useState("");
    const handler=(e)=>{
         setItems([
            ...items,
         ])
    }
 return(
    <div>
        <div>
            <form action="">
                <input type="text" placeholder="add items" value={items}/>
                <button onClick={handler}>Add</button>
            </form>
            <div>
          
            </div>
        </div>
    </div>
 );
}
export default TodoApp;