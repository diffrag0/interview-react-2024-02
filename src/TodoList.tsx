import { useState, useEffect } from 'react';
import { fetchTodos, saveTodos } from './api'
import './style.css'

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState(0);

  // 저장 된 데이터를 불러옵니다.
  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, [todos]);

  const addTodo = () => {
    const newTodo = { id: Date.now(), text: todoText, completed: false };
    todos.push(newTodo)
    setTodos(todos);
    setTodoText('');
    setTodoCount(todoCount + 1)
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    // TODO: Todo 아이템 삭제
  };

  const saveToServer = () => {
    saveTodos(todos).then(() => {
      alert('저장 되었습니다.')
    })
  }

  return (
    <div style={{ padding: 24 }}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <div style={{ border: '1px solid #ddd', marginTop: 12, marginBottom: 12, height: 80 }}>
        <p style={{margin: 0}}>Buttons</p>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={saveToServer}>Save Todos</button>
      </div>
      <p style={{ margin: 0 }}>Todo Count: {todoCount}</p>
      <ul>
        {todos.map((todo, index) => (
          <li>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={completeTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
