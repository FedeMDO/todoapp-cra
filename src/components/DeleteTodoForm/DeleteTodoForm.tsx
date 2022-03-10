import { useMutation } from '@apollo/client';
import { ALL_TODOS, DELETE_TODO } from '../../services/Queries';
import './DeleteTodoForm.css';

interface IDeleteTodoFormProps {
  id: number;
}

export const DeleteTodoForm: React.FunctionComponent<IDeleteTodoFormProps> = ({ id }) => {
  const [deleteTodo, { loading, error }] = useMutation(DELETE_TODO, {
    refetchQueries: [ALL_TODOS, 'AllTodos'],
  });

  if (loading) return <>Submitting...</>;
  if (error) return <>Submission error! ${error.message}</>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        deleteTodo({ variables: { id } });
      }}
    >
      <button type="submit" className="todoitem-delete-button">
        X
      </button>
    </form>
  );
};
