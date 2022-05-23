import Error from '../helpers/error';
import Loading from '../helpers/loading';

const setContentFrstRequest = (Component, process, newCharsLoading) => {
  switch (process) {
    case 'waiting':
      return <Loading/>;
    case 'loading':
      return newCharsLoading ? <Component/> : <Loading/>;
    case 'error':
      return <Error/>;
    case 'confirmed':
      return <Component/>;
    default:
      throw new Error('Unexpected process state');
  }
}

export default setContentFrstRequest;
