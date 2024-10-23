import React, { useState, useEffect } from 'react';
import RuleForm from './RuleForm';
import RuleList from './RuleList';
import EvaluateForm from './EvaluateForm';
import "./App.css"

function App() {
  const [rules, setRules] = useState([]);
  const [evaluationResult, setEvaluationResult] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/rules`)
      .then(response => response.json())
      .then(data => setRules(data))
      .catch(err => console.error("Error fetching rules:", err));
  }, []);

  const handleCreateRule = (rule) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/create_rule`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rule }),
    })
    .then(response => response.json())
    .then(newRule => {
      setRules([...rules, newRule]);
    })
    .catch(err => console.error("Error creating rule:", err));
  };

 
  const handleEvaluateRule = (userData) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/evaluate_rule`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userData }),
    })
    .then(response => response.json())
    .then(result => setEvaluationResult(result))
    .catch(err => console.error("Error evaluating rule:", err));
  };

  return (
    <div className='home'>
      <div className='container'>
        <h1>Rule Engine</h1>
        <div className='border'>
          <h3>Create Rules</h3>
          <RuleForm onSubmit={handleCreateRule} />
        </div>
        <div className='border'>
          <h3>Rules</h3>
          <RuleList rules={rules} />
        </div>
        <div className='border'>
          <h3>Evaluate Rules</h3>
          <EvaluateForm onSubmit={handleEvaluateRule} />
        </div>
        
        {evaluationResult !== null && (
          <div>
            <h3>Evaluation Result: {evaluationResult.result ? 'Eligible' : 'Not Eligible'}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

