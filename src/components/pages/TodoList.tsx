import { useEffect, useState } from "react";
import { todoList } from "../../data/todos";
import type { Todo, TodoJsonPlaceholder } from "../../types/todo.type";
import ToDoListItem from "../todoList/todoListItem";
import { getTodos } from "../../services/todo.services";

function TodoList() {
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  // before (menggunakan state local)
  const [todos, setTodos] = useState<TodoJsonPlaceholder[]>([]);
  // after (menggunakan redux)
  // const todosRedux = useSelector((state: RootState) => state.todo.todos);
  // const dispatch = useDispatch<AppDispatch>();

  // after nya after (menggunakan data hasil dari proses fetching)
  const loadTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.log("error " + error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const isEditing = editId != null;

  // function untuk melakukan updating todolist
  function handleAddTodo() {
    // 1. ditambah parameter

    setDescription("");
    setEditId(null);
  }

  function handleSaveTodo() {
    setTodos((todoSebelumnya) => todoSebelumnya.map((todo) => (todo.id === editId ? { ...todo, description: description } : todo)));

    setDescription("");
    setEditId(null);
  }

  function handleDeleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // function handleEditTodo(todo: TodoJsonPlaceholderW) {
  //   setDescription(todo);
  //   setEditId(todo.id);
  // }

  return (
    <div className="flex flex-col">
      {/* title */}
      <h1>Todo List Batch 10</h1>

      {/* user input */}
      <div>
        <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      {/* bagian tampilan todolist */}
      <ul>
        {todos.map((val) => (
          <ToDoListItem key={val.id} todo={val} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
      <button onClick={isEditing ? handleSaveTodo : handleAddTodo} className="bg-amber-900 text-amber-100 text-2xl w-fit">
        {isEditing ? "Save" : "Add"}
      </button>
    </div>
  );
}

export default TodoList;
