import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useServices from '../../../services/services';
import Error from '../../../helpers/error';
import Loading from '../../../helpers/loading';
import CharComp from './CharComp';

import './singleCharacter.scss';

const SingleCharacter = () => {
  const [ char, setChar ] = useState(null);
  const { charId } = useParams();

  const { error, loading, clearError, getCharacter } = useServices();

  useEffect(() => { updateChar() }, [ charId ]); // eslint-disable-line

  const updateChar = () => {
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
  };

  const onCharLoaded = (char) => { setChar(char) };


  const content = loading ?
                  <Loading/> : error ?
                               <Error/> : char ?
                                         <CharComp char={ char }/> : null;


  return (
    <div className='single-comic'>
      { content }
    </div>
  );
}

export default SingleCharacter;
