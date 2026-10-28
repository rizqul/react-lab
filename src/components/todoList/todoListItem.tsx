import type { Todo, TodoJsonPlaceholder } from "../../types/todo.type";

interface TodoListItemProps {
  todo: TodoJsonPlaceholder;
  handleDeleteTodo: (id: number) => void;
  // handleEditTodo: (todo: TodoJsonPlaceholder) => void;
}

function ToDoListItem({ todo, handleDeleteTodo }: TodoListItemProps) {
  return (
    <li key={todo.id}>
      {todo.userId} - {todo.id} - {todo.title} - {todo.completed ? "done" : "todo"}
      <button className="p-2 bg-red-600" onClick={() => handleDeleteTodo(todo.id)}>
        Delete
      </button>
      <button className="p-2 bg-yellow-600">Edit</button>
    </li>
  );
}

export default ToDoListItem;
