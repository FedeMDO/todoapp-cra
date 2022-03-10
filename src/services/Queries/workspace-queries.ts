import { gql } from '@apollo/client';

const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($name: String!) {
    createOneWorkspace(input: { workspace: { name: $name } }) {
      id
      name
      created
      updated
    }
  }
`;

const ALL_WORKSPACES = gql`
  query AllWorkspaces {
    workspaces(sorting: [{ field: created, direction: ASC }]) {
      id
      name
      created
      updated
    }
  }
`;

const ONE_WORKSPACE = gql`
  query OneWorkspace($id: ID!) {
    workspace(id: $id) {
      id
      name
      created
      updated
    }
  }
`;

export { CREATE_WORKSPACE, ALL_WORKSPACES, ONE_WORKSPACE };
