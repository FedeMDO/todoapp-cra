import { Workspace } from '../../interfaces';
import { Link } from 'react-router-dom';
import './WorkspaceSidebar.css';
import { useQuery } from '@apollo/client';
import { ALL_WORKSPACES } from '../../services/Queries';
import { CreateWorkspaceForm } from '..';

const mapWorkspaces = (workspaces: Workspace[]) =>
  workspaces.map((ws) => (
    <Link className="link" key={ws.id} to={`/workspace/${ws.id}`}>
      {ws.name}
    </Link>
  ));

export const WorkspaceSidebar: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(ALL_WORKSPACES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="workspaces-sidebar">
      <h2>Workspaces</h2>
      <CreateWorkspaceForm />
      <div className="workspaces-link-list">{mapWorkspaces(data.workspaces)}</div>
    </div>
  );
};
