import React from 'react';

function Button({ children, disabled }) {
  return (
    <div className='h-full w-full bg-blue-600 text-center' disabled={disabled}>
      {children}
    </div>
  );
}

export default Button;
