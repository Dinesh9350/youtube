import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button className='px-4 py-1 m-1 sm:m-2 rounded-lg bg-gray-100 text-sm text-center whitespace-nowrap '>
        {name}
      </button>
    </div>
  );
};

export default Button;
