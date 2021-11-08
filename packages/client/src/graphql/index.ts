import { gql } from '@apollo/client';

export interface IHelloMessage {
  showMessage: string;
}

export const HELLO_MESSAGE = gql`
  query Query {
    showMessage
  }
`;
