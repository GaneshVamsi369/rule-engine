import React, { useState } from 'react';

const EvaluateForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    age: '',
    department: '',
    salary: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="text"
        name="age"
        value={userData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="department"
        value={userData.department}
        onChange={handleChange}
        placeholder="Department"
      />
      <input
        type="text"
        name="salary"
        value={userData.salary}
        onChange={handleChange}
        placeholder="Salary"
      />
      <input
        type="text"
        name="experience"
        value={userData.experience}
        onChange={handleChange}
        placeholder="Experience"
      />
      <button type="submit" className='submit'>Evaluate Rule</button>
    </form>
  );
};

export default EvaluateForm;
