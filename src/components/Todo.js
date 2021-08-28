const Todo = ({ text, completed, id, handleDelete, handleComplete }) => {
  console.log("isCompleted", completed);
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={() => handleComplete(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => handleDelete(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
