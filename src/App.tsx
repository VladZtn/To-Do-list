import { useState } from 'react';

import './style.css';

export const App = ({ name }) => {
  const [todo, setTodo] = useState<string>();
  const [list, setList] = useState<Array<string>>([]);

  const stateDisplay = (e) => {
    e.preventDefault();
    setList([...list, todo.trim()]);
    setTodo('')
  };
  console.log(list)
  const renderTodo = () => {
    return list.map((todo) => <p>{todo}</p>);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit" onClick={stateDisplay}>
        Add
      </button>
      <p>{renderTodo()}</p>
    </div>
  );
};
