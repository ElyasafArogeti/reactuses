import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './home';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]); 

  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data); // שמירת המשתמשים ב-state
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, []); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    // בודק עם האדם נמצא במשתמשים שטענו
    const user = users.find((user) => user.username === username && user.website === password);
 
    
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home', { state: { user } }); // מעבר ל-home עם state
    } else {
      setUsername('');
      setPassword('');
      setErrorMessage('השם או הסיסמא לא נכונים');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
