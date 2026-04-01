import React, { useState } from 'react';
import TodoItem, { type Todo } from './TodoItem'; 

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return; 
    
    const newTodo: Todo = {
      id: Date.now(), 
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]); 
    setInputValue(''); 
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Todo List</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="add a new task..."
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={handleAddTodo}
          style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          add
        </button>
      </div>

      <div>
        {/* تمرير البيانات (Props Drilling) للابن */}
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>no tasks available</p>
        ) : (
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;