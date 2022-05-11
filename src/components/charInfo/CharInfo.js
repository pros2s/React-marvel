import { useState, useEffect } from 'react';

import useServices from '../../services/services';
import CharComp from './charComp';
import Error from '../../helpers/error';
import Loading from '../../helpers/loading';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
  const { charId } = props;

  const [ char, setChar ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);


  useEffect(() => {
    characterData();
  }, [ charId ]); // eslint-disable-line


  const onCharLoaded = (char) => {
    setLoading(false);
    setChar(char);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };


  const requestApi = useServices();

  const characterData = () => {
    if (!charId) return;

    setLoading(false);
    requestApi
      .getCharacter(charId)
      .then(onCharLoaded)
      .catch(onError);
  };


  const content = loading ?
                  <Loading/> : error ?
                              <Error/> : char ?
                                        <CharComp char={ char }/> : <Skeleton/>;

  return (
    <div className='char__info'>
      { content }
    </div>
  );
}

export default CharInfo;
