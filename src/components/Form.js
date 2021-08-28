import filterState from "../utils/constants/filterState";

const Form = ({ todos, setTodos, setInputText, onStatusChange, inputText }) => {
  // I can write javascript function and code
  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
  };

  const handleStatusChange = (e) => {
    onStatusChange(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={inputText}
        className="todo-input"
        onChange={handleInputTextChange}
      />
      <button className="todo-button" onClick={handleSubmitTodo} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          onChange={handleStatusChange}
          className="filter-todo"
        >
          <option value={filterState.ALL}>All</option>
          <option value={filterState.COMPLETED}>Completed</option>
          <option value={filterState.UNCOMPLETED}>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
