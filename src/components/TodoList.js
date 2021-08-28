import Todo from "./Todo";
const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    console.log("Deleting todo", id);
    setTodos(todos.filter((el) => el.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(({ text, completed, id }) => (
          <Todo
            text={text}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            completed={completed}
            id={id}
            key={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
