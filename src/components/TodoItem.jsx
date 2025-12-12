import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const saveEdit = () => {
        if (!newText.trim()) return;
        editTodo(todo.id, newText);
        setIsEditing(false);
    }

    return (
        <>
            <div className="flex items-center justify-between bg-white/10 border border-white/20 p-4 rounded-xl 
                    backdrop-blur-md hover:bg-white/20 transition mt-3">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        className="w-5 h-5 accent-indigo-500 cursor-pointer"
                    />
                    {
                        isEditing && (
                            <input
                                className="px-2 py-1 bg-white/20 rounded text-white outline-none"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                            />
                        )
                    }
                    <span
                        className={`text-white text-lg ${todo.completed ? "line-through opacity-60" : ""}`}
                    >
                        {todo.text}
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={saveEdit}
                        className="text-green-400 hover:text-green-300 transition"
                    >
                        Save
                    </button>
                    <FiEdit
                        onClick={() => setIsEditing(true)}
                        className="text-yellow-300 cursor-pointer hover:text-yellow-200"
                        size={20}
                    />
                    <FiTrash2
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-400 cursor-pointer hover:text-red-300"
                        size={20}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoItem