import { useMutation } from '@apollo/client';
import { ALL_TODOS, DELETE_MANY_TODO } from '../../services/Queries';

interface IDeleteAllResolvedFormProps {
  ids: number[];
}

export const DeleteAllResolvedForm: React.FunctionComponent<IDeleteAllResolvedFormProps> = ({ ids }) => {
  const [deleteManyTodos, { loading, error }] = useMutation(DELETE_MANY_TODO, {
    refetchQueries: [ALL_TODOS, 'AllTodos'],
  });

  if (loading) return <>Submitting...</>;
  if (error) return <>Submission error! ${error.message}</>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        deleteManyTodos({ variables: { ids: ids } });
      }}
    >
      <button type="submit">Delete all resolved tasks</button>
    </form>
  );
};
