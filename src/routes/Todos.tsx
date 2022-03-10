import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ALL_TODOS, ONE_WORKSPACE } from '../services/Queries';
import { Todo } from '../interfaces';
import { CreateTodoForm, DeleteAllResolvedForm, TodoList } from '../components';

const Todos: React.FunctionComponent = () => {
  const { workspaceId } = useParams();
  const todoItemsQuery = useQuery(ALL_TODOS, { variables: { workspaceId } });
  const workspaceQuery = useQuery(ONE_WORKSPACE, { variables: { id: workspaceId } });

  if (todoItemsQuery.loading || workspaceQuery.loading) return <p>Loading...</p>;
  if (todoItemsQuery.loading || workspaceQuery.loading || !workspaceId) return <p>Error :(</p>;

  return (
    <div className="todos-container">
      <h2>
        Tasks from <i>{workspaceQuery.data.workspace.name}</i> workspace
      </h2>
      <CreateTodoForm workspaceId={workspaceId} />
      <TodoList todoItems={todoItemsQuery.data.todoItems} />
      {todoItemsQuery.data.todoItems.some((todo: Todo) => todo.completed) && (
        <DeleteAllResolvedForm
          ids={todoItemsQuery.data.todoItems
            .filter((todo: Todo) => todo.completed)
            .map((todo: Todo) => Number(todo.id))}
        />
      )}
    </div>
  );
};

export default Todos;
