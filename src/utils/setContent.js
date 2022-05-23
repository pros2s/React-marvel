import Error from '../helpers/error';
import Loading from '../helpers/loading';
import Skeleton from '../components/skeleton/Skeleton';

  const setContent = (Component, process, data) => {
    switch (process) {
      case 'waiting':
        return <Skeleton/>;
      case 'loading':
        return <Loading/>;
      case 'error':
        return <Error/>;
      case 'confirmed':
        return <Component data={ data }/>;
      default:
        throw new Error('Unexpected process state');
    }
  }

  export default setContent;
