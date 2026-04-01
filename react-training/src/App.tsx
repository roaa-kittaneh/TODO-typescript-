import React from 'react';
import Counter from './components/Counter'; 
import TodoList from './components/TodoList'; 

const App: React.FC = () => {
 

  return (
<div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '20px' }}>   
      <Counter />
      <TodoList />
    </div>
  );
};

export default App;
