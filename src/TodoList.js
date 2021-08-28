const TodoList = () => {
  const todo = {
    name: "Finish homework !",
    status: "COMPLETED",
  };

  return <div>{todo.name}</div>;
};

export default TodoList;
