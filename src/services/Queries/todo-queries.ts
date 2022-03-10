import { gql } from '@apollo/client';

const ALL_TODOS = gql`
  query AllTodos($workspaceId: String!) {
    todoItems(filter: { workspaceId: { eq: $workspaceId } }, sorting: [{ field: created, direction: DESC }]) {
      id
      title
      completed
      created
      updated
      workspaceId
    }
  }
`;

const CREATE_TODO = gql`
  mutation CreateTodo($title: String!, $workspaceId: String!) {
    createOneTodoItem(input: { todoItem: { title: $title, completed: false, workspaceId: $workspaceId } }) {
      id
      title
      completed
      created
      updated
      workspaceId
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateOneTodoItem($id: ID!, $completed: Boolean!) {
    updateOneTodoItem(input: { id: $id, update: { completed: $completed } }) {
      id
      title
      completed
      created
      updated
      workspaceId
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteOne($id: ID!) {
    deleteOneTodoItem(input: { id: $id }) {
      id
      title
      completed
      created
      updated
      workspaceId
    }
  }
`;

const DELETE_MANY_TODO = gql`
  mutation DeleteMany($ids: [ID!]!) {
    deleteManyTodoItems(input: { filter: { id: { in: $ids } } }) {
      deletedCount
    }
  }
`;

export { ALL_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO, DELETE_MANY_TODO };
