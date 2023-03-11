import { gql } from '@apollo/client';

export const ALL_TODOS = gql`
  query allPosts {
    allPosts {
      id
      title
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation post($title: String!, $userId: ID!, $completed: Boolean!) {
   addTodo: createPost (title: $title, user_id: $userId, completed: $completed) {
    id
    title
  }
}
`;
