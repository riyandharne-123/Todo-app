import React from 'react'

const Todos=({todos,deleteTodo})=>{

    const todoList =todos.length ?(
        //if true
        todos.map(todo =>{
           return(
               <div className="collection-item center" key={todo.id}>
                   <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
               </div>
           ) 
        })
    ):(
        //if false
        <p className="center">You have no tasks left!</p>
    )

    return(
        <div className="todos collection">
      {todoList}
        </div>

    )
}
export default Todos;