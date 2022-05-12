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

  useEffect(() => {
    characterData();
  }, [ charId ]); // eslint-disable-line


  const onCharLoaded = (char) => {
    setChar(char);
  };

  const { error, loading, getCharacter } = useServices();

  const characterData = () => {
    if (!charId) return;

    getCharacter(charId)
      .then(onCharLoaded)
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
