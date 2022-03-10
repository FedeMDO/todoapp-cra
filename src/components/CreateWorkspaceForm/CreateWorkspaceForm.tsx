import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ALL_WORKSPACES, CREATE_WORKSPACE } from '../../services/Queries';

export const CreateWorkspaceForm: React.FunctionComponent = () => {
  const [createWorkspace, { loading, error }] = useMutation(CREATE_WORKSPACE, {
    refetchQueries: [ALL_WORKSPACES, 'AllWorkspaces'],
  });

  const [createWorkspaceName, setCreateWorkspaceName] = useState('');
  if (loading) return <>Submitting...</>;
  if (error) return <>Submission error! ${error.message}</>;

  return (
    <form
      className="workspace-create"
      onSubmit={(e) => {
        e.preventDefault();
        if (createWorkspaceName !== '') {
          createWorkspace({ variables: { name: createWorkspaceName } });
        }
        setCreateWorkspaceName('');
      }}
    >
      <input type="text" value={createWorkspaceName} onChange={(e) => setCreateWorkspaceName(e.target.value)} />
      <button className="workspace-create-button" type="submit">
        Create new workspace
      </button>
    </form>
  );
};
