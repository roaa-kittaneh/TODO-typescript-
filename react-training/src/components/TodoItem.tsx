import React from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// تعريف الـ Props اللي رح يستقبلها الابن من الأب
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #eee'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          style={{ cursor: 'pointer' }}
        />
        
        <span style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#aaa' : '#333'
        }}>
          {todo.text}
        </span>
      </div>

      <button 
        onClick={() => onDelete(todo.id)}
        style={{ 
          backgroundColor: '#ff4d4f', color: 'white', border: 'none', 
          borderRadius: '4px', padding: '5px 10px', cursor: 'pointer' 
        }}
      >
        delete
      </button>
    </div>
  );
};

export default TodoItem;