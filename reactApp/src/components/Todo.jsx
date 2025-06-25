import React, { useState,useEffect } from 'react'
import axios from 'axios';
const API = 'http://localhost:3000';

const Todo = () => {
    const [task,setTask] = useState('');
    const [todos,setTodos] = useState([]);
    const [editing,setEditing] = useState(null)

    const fetchTodo = async() => {
        const response = await axios.get(`${API}/todo/get`)
        console.log(response.data)
        setTodos(response.data.todoData)
    }

    useEffect(() => {
        fetchTodo()
    },[])

    const handleAddorEdit = async(e) => {
        e.preventDefault();
        if(editing)
            await axios.put(`${API}/todo/put/${editing._id}`,{task})
        else
            await axios.post(`${API}/todo/post/`,{task});
        setEditing(null)
        setTask('')
        fetchTodo();
    }

    const handleDelete = async(id) => {
        await axios.delete(`${API}/todo/delete/${id}`);
        fetchTodo();
    }

    const handleToggleStatus = async(todo) =>{
        await axios.put(`${API}/todo/put/${todo._id}`,{
            status:!todo.status
        })
        fetchTodo()
    }

  return (
    <>
        <div>
            <h1>Todos</h1>
            <input type="text"
                   value={task}  
                   placeholder='Enter the task' 
                   onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddorEdit}>{editing?"Update":"Add"}</button>

            <ul>
                {todos.map((todo) => (
                   <li key={todo._id}>
                        <span onClick={() => {handleToggleStatus(todo)}} style={{cursor:"pointer", textDecoration:todo.status?"line-through":"none"}}>
                            <p>{todo.task}</p>
                        </span>
                        <button onClick={() => {
                            setEditing(todo)
                            setTask(todo.task)
                        }}>Edit</button>
                        <button onClick={() => handleDelete(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Todo