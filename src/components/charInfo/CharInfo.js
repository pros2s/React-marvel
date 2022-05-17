import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import useServices from '../../services/services';
import CharComp from './charComp';
import Error from '../../helpers/error';
import Loading from '../../helpers/loading';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
  const { charId } = props;

  const [ char, setChar ] = useState(null);
  const [ showTrigger, setShowTrigger ] = useState(false);

  useEffect(() => {
    characterData();
  }, [ charId ]); // eslint-disable-line


  const onCharLoaded = (char) => {
    setShowTrigger(true);
    setChar(char);
  };

  const { error, loading, getCharacter, clearError } = useServices();

  const characterData = () => {
    if (!charId) return;

    setShowTrigger(false);
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
  };


  const content = loading ?
                  <Loading/> : error ?
                               <Error/> : char ?
                                          <CharComp char={ char } showTrigger={ showTrigger }/> : <Skeleton/>;

  return (
    <CSSTransition
      in={ showTrigger }
      timeout={ 1000 }
      classNames='char__animate'>
        <div className='char__info'>
          { content }
        </div>
    </CSSTransition>
  );
}

export default CharInfo;
