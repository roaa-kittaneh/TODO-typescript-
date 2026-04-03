import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'danger'; //
  isActive?: boolean; //
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  isActive = false 
}) => {
  
  let backgroundColor = '#007bff'; 
  if (variant === 'secondary') backgroundColor = '#6c757d';
  if (variant === 'danger') backgroundColor = '#dc3545'; 

  return (
    <button 
      onClick={onClick}
      style={{
        padding: '8px 12px',
        backgroundColor: backgroundColor,
        color: 'white',
        border: isActive ? '2px solid #000' : '2px solid transparent', // تمييز الزر النشط
        borderRadius: '4px',
        cursor: 'pointer',
        opacity: isActive ? 1 : 0.8,
        fontWeight: isActive ? 'bold' : 'normal',
        transition: 'all 0.2s ease'
      }}
    >
      {children}
    </button>
  );
};

export default Button;