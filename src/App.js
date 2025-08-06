import './App.css';
import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (password === '32645') {
      alert('Правильно бро');
    } else {
      alert('Неправильный пароль');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Приветствую</h1>
        <p>Введите пароль</p>
        <input
          type="password"
          className="inp"
          value={password}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClick}>Accept</button>
      </header>
    </div>
  );
}

export default App;