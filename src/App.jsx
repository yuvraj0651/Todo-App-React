import './App.css'
import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodo([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodo(todos.filter(todo => todo.id !== id));
  };

  const toggleTodos = (id) => {
    setTodo(todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    }))
  };

  const editTodo = (id, newText) => {
    setTodo(todos.map((item) => 
      item.id === id ? { ...item, text: newText } : item
    ))
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-5">
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20">
          <h1 className="text-2xl font-semibold text-white text-center mb-[1.5rem] tracking-wide">
            📝 Modern Todo App
          </h1>
          <TodoInput addTodo={addTodo} />
          <div className="mt-5 py-3">
            {
              todos.length === 0 ?
                (
                  <p className="text-center text-slate-300">No tasks added yet...</p>
                ) : (
                  todos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      deleteTodo={deleteTodo}
                      toggleComplete={toggleTodos}
                      editTodo={editTodo}
                    />
                  ))
                )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
