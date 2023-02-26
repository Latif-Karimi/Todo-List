import React from 'react'
import { Fragment,useEffect,useState } from 'react'
import { EditTodo } from './EditTodo'

export const ListTodo = () => {

    const deleteTodo = async (id)=>{
      try {
        const deleteTodo= await fetch(`http://localhost:3333/todos/${id}`,{
          method:"DELETE"
        });
        setTodos(todos.filter(todo=> todo.id !==id))
      } catch (err) {
        console.error(err.message)
        
      }
    }
    const [todos,setTodos] = useState ([]);
    const getTodos = async ()=>{
        try {
            const response = await fetch ("http://localhost:3333/todos")
            const jsonData = await response.json()
            setTodos(jsonData) 
        } catch (err) {
            console.error(err.message)  
        }
    }
    
    useEffect(()=>{
        getTodos();
    },[])


  return (
    <Fragment>
         
  <table className="table text-center mt-5">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
        {/* {<td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>} */}
    {todos.map(todo =>(
      <tr key={todo.id}>
        <td>{todo.description}</td>
        <td>
          <EditTodo todo={todo}/>
        </td>
        <td>
        <button className='btn btn-danger' onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </td>
        

      </tr>
    ))}
    </tbody>
  </table>
    </Fragment>
  )
}
