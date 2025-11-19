import React from 'react'
import './App.css'
import {TodoProvider} from "./Contexts"


function App() {
  const[todos , setTodos] = useState([])
  const addTodo= (todo) => {
    setTodos((prev) =>[{id: Date.now(),...todo}, ...prev])
  }
  
  const updateTodo = (id,todo) => {
     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo : prev )))
  }

  return (
    <TodoProvider value={{todos,appTodo,deleteTodo,updateTodo,deleteTodo,toggleComplete}} > 
    <div className=" bg-gradient-to-r from-[#016B61] via-blue-700 to-blue-300 min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white  bg-gradient-to-r from-green-700 via-yellow-600 to-pink-400">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
      </TodoProvider>
  )
}

export default App
