import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import setContent from '../../../utils/setContent';
import useServices from '../../../services/services';
import CharComp from './CharComp';

import './singleCharacter.scss';


const SingleCharacter = () => {
  const [ char, setChar ] = useState(null);
  const { charId } = useParams();

  const { clearError, getCharacter, process, setProcess } = useServices();

  useEffect(() => { updateChar() }, [ charId ]); // eslint-disable-line

  const updateChar = () => {
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onCharLoaded = (char) => { setChar(char) };

  return (
    <div className='single-comic'>
      { setContent(CharComp, process, char) }
    </div>
  );
}

export default SingleCharacter;
