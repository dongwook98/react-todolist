import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: '123',
      text: '장보기',
      status: 'active',
    },
    {
      id: '124',
      text: '공부하기',
      status: 'active',
    },
  ]);

  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트 해야 함
    // console.log(todo);
    setTodos([...todos, todo]);
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      {/* AddTodo 컴포넌트에서 Add가 되면 handleAdd 콜백함수를 호출 */}
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>
  );
}
