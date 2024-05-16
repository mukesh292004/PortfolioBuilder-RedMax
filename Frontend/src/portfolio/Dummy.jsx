import React, { useState } from 'react';

const Dummy = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const inputsArray = inputValue.split(/[ ,]+/); 
    console.log(inputsArray); 
  };

  return (
    <div>
      <form onSubmit={handleInputSubmit} className='bg-slate-950'>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter multiple values separated by comma or space"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dummy;
