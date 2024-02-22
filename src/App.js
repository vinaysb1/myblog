import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/articles', {
        title,
        description
      });
      console.log('Article posted:', response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };

  return (
    <div className="container">
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
