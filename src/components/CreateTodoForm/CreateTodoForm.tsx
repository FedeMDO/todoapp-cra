import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ALL_TODOS, CREATE_TODO } from '../../services/Queries';
import './CreateTodoForm.css';

interface ICreateTodoFormParams {
  workspaceId: string;
}

export const CreateTodoForm: React.FunctionComponent<ICreateTodoFormParams> = ({ workspaceId }) => {
  const [createTodo, { loading, error }] = useMutation(CREATE_TODO, {
    refetchQueries: [
      {
        query: ALL_TODOS,
        variables: { workspaceId },
      },
    ],
  });

  const [addTodoTitle, setAddTodoTitle] = useState('');
  if (loading) return <>Submitting...</>;
  if (error) return <>Submission error! ${error.message}</>;

  return (
    <form
      className="todoitem-create"
      onSubmit={(e) => {
        e.preventDefault();
        if (addTodoTitle !== '') {
          createTodo({ variables: { title: addTodoTitle, workspaceId: workspaceId } });
        }
        setAddTodoTitle('');
      }}
    >
      <input type="text" value={addTodoTitle} onChange={(e) => setAddTodoTitle(e.target.value)} />
      <button className="todoitem-create-button" type="submit">
        Add todo
      </button>
    </form>
  );
};
