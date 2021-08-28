import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import filterState from "./utils/constants/filterState";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(filterState.ALL);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    handleFilterChange();
  }, [todos, status]);

  const handleStatusChange = (statusValue) => {
    setStatus(statusValue);
  };

  const handleFilterChange = () => {
    switch (status) {
      case filterState.COMPLETED:
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case filterState.UNCOMPLETED:
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo list!</h1>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        onStatusChange={handleStatusChange}
      />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
