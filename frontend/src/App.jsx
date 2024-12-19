import { useState } from "react"
import "./style.css"
import SearchBar from './componet/Searchbar';
import TodoList from './componet/TodoList';

function generateId() {
  return Math.floor(Math.random()*1000)
}

function App() {

  const [todos,setTodos] = useState([])
  const [input,setInput] = useState("")

  const handleSubmit = ()=>{
     setTodos(todos=>
      todos.concat({
        text:input,
        id:generateId()
      }))
      setInput("")
  }
  const removeTodo = (id) =>{
    setTodos((todos)=> todos.filter((t) => t.id !== id))
}

  return (
    <>
    <div>

    <section className="container">
    <header className="mx-24">

    <SearchBar todos= {todos} />
    </header>

    <TodoList todos={todos} removeTodo={removeTodo} />
    <div className="my-5 pl-16">
        <input 
        type="text"
        value={input}
        onChange={(e)=> setInput(e.target.value)} 
        />
        <button onClick={handleSubmit}>ADD</button>
    </div>
    </section>
  
        </div>
    </>
  )
}

export default App
