import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { HELLO_MESSAGE, IHelloMessage } from './graphql';

const App = () => {
  const { loading, error, data } = useQuery<IHelloMessage>(HELLO_MESSAGE);
  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>An error occured: {error.message}</Typography>;
  }

  return (
    <>
      <Typography>{data?.showMessage.message}</Typography>
      <Typography>{data?.showMessage.__typename}</Typography>
    </>
  );
};

export default App;
