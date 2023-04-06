import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return; // 아무것도입력하지않으면 바로 리턴
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일을 추가하세요.'
        value={text}
        onChange={handleChange}
      />
      <button>추가</button>
    </form>
  );
}

// 투두 추가하는 컴포넌트
// 유효성
