import { DeleteTodoForm } from '..';
import { Todo } from '../../interfaces';
import './TodoItem.css';

interface ITodoItemProps {
  todo: Todo;
  todoCompletedHandler: (todoId: number, newValue: boolean) => void;
}

export const TodoItem: React.FunctionComponent<ITodoItemProps> = ({ todo, todoCompletedHandler }) => {
  return (
    <div className={todo.completed ? 'todo-item completed' : 'todo-item'}>
      <label>
        <input
          type="checkbox"
          name="todo"
          checked={todo.completed}
          onChange={() => todoCompletedHandler(todo.id, !todo.completed)}
        />
        {todo.title}
      </label>
      <DeleteTodoForm id={todo.id} />
    </div>
  );
};
