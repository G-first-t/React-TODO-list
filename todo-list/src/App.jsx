const App=()=>{
return(
  <>
    <div className="App">
        <h1>MY TODOS</h1>
           <div className="todo-wrapper">
             <div className="todo-input">
                   <div className="todo-input-item">
                    <label>Title</label>
                    <input type="text" placeholder="What's the task's Title" />
                   </div>
                   <div className="todo-input-item">
                    <label>Description</label>
                    <input type="text" placeholder="What's the task's Description" />
                   </div>
                   <div className="todo-input-item">
                    <button type='button' className="primaryBtn">Add</button>
                   </div>

             </div>
             <div class="btn-area">
                    <button>Todo</button>
                    <button>Completed</button>
             </div>
               <div className="todo-list">
                  <div className="todo-list-item">
                    <h3>Task1</h3>
                    <p>Description</p>
                  </div>
              </div>
           </div>
    </div>
  </>
)
}
export default App;