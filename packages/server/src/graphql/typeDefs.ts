const TestReq = `
  type TestReq {
    message: String
  }
`;

const Query = `
  type Query {
    showMessage: TestReq
  }
`;

export default [Query, TestReq];
