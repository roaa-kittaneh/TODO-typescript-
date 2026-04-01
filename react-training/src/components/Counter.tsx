import React, { useState } from 'react'; 

const Counter = () => {
  
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ padding: '20px', border: '2px solid #0077b5', borderRadius: '15px', maxWidth: '300px', margin: '20px auto', textAlign: 'center' }}>
      
      <h2>counter</h2>
      
      <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#333' }}>
        {count}
      </p>

      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          increase +
        </button>

        <button 
          onClick={() => setCount(count - 1)}
          style={{ padding: '10px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          decrease -
        </button>

      </div>

      <button 
        onClick={() => setCount(0)}
        style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}
      >
        reset (0)
      </button>

    </div>
  );
};

export default Counter;