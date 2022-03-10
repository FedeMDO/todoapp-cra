import { useMutation } from '@apollo/client';
import { TodoItem } from '..';
import { Todo } from '../../interfaces';
import { ALL_TODOS, UPDATE_TODO } from '../../services/Queries';
import './TodoList.css';

interface ITodoListProps {
  todoItems: Todo[];
}

export const TodoList: React.FunctionComponent<ITodoListProps> = ({ todoItems }) => {
  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [ALL_TODOS, 'AllTodos'],
  });

  const todoCompletedHandler = (todoId: number, newValue: boolean) => {
    updateTodo({ variables: { id: todoId, completed: newValue } });
  };
  return (
    <div className="TodoList">
      {todoItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todoCompletedHandler={todoCompletedHandler} />
      ))}
    </div>
  );
};
