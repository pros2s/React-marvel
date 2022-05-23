import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import setContent from '../../utils/setContent';
import useServices from '../../services/services';
import CharComp from './charComp';

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

  const { getCharacter, clearError, process, setProcess } = useServices();

  const characterData = () => {
    if (!charId) return;

    setShowTrigger(false);
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  return (
    <CSSTransition
      in={ showTrigger }
      timeout={ 1000 }
      classNames='char__animate'>
        <div className='char__info'>
          { setContent(CharComp, process, char) }
        </div>
    </CSSTransition>
  );
}

export default CharInfo;
