import { gql } from '@apollo/client';

export interface IHelloMessage {
  showMessage: {
    message: string;
    __typename: string;
  };
}

export const HELLO_MESSAGE = gql`
  query TestReq {
    showMessage {
      message
    }
  }
`;
