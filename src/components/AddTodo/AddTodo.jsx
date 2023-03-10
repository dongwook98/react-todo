import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: '고유한값', text, status: 'active' });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='계획 없는 목표는 한낱 꿈에 불과하다'
        value={text}
        onChange={handleChange}
      />
      <button>추가</button>
    </form>
  );
}
