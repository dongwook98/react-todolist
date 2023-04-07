import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header
        filter={filter}
        filters={filters}
        onFilterChange={setFilter}
      ></Header>
      <TodoList filter={filter}></TodoList>
    </>
  );
}

export default App;
