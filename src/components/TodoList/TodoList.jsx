import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

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

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          ></Todo> // li, input, 등등 복잡해지므로 Todo컴포넌트로 분리
        ))}
      </ul>

      {/* AddTodo 컴포넌트에서 Add가 되면 handleAdd 콜백함수를 호출 */}
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>
  );
}
