import React, { useState } from 'react';

const RuleForm = ({ onSubmit }) => {
  const [rule, setRule] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rule.trim() !== '') {
      onSubmit(rule);
      setRule('');  
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="text"
        value={rule}
        onChange={(e) => setRule(e.target.value)}
        placeholder="Enter rule (e.g., age > 30 AND salary > 50000)"
      />
      <button type="submit" className='submit'>Create Rule</button>
    </form>
  );
};

export default RuleForm;
