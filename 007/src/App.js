// import React from 'react';
import './App.css';

export default function App() {
  const username = "Shubham";

  return (
    <div>
      <h1 className='active'>{username}</h1>
      <p>Lorem ipsum dolor, placeat.</p>
    </div>
  )

  // return React.createElement("h1", {className: "active"}, "Shubham")
}