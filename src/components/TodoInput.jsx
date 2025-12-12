import { useState } from 'react'

const TodoInput = ({ addTodo }) => {

    const [text, setText] = useState("");

    const handleAdd = () => {
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    }

    return (
        <>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-slate-300
                    outline-none border border-white/20 focus:border-indigo-400 transition"
                />

                <button
                    onClick={handleAdd}
                    className="px-4 py-3 bg-slate-600 hover:bg-indigo-700 text-white rounded-xl font-semibold 
                    transition-all duration-300 active:scale-95"
                >
                    Add
                </button>
            </div>
        </>
    )
}

export default TodoInput