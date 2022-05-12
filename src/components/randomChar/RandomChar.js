import { useState, useEffect } from 'react';

import useServices from '../../services/services';
import CharBlock from './charBlock';
import Error from '../../helpers/error';
import Loading from '../../helpers/loading';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
  const [ char, setChar ] = useState({});

  useEffect(() => {
    characterData();

    const timer = setInterval(characterData, 100000);

    return () => { clearInterval(timer); };
  }, []) ; // eslint-disable-line


  const onCharLoaded = (char) => { setChar(char); }


  const { loading, error, getAllCharacters, getCharacter, clearError } = useServices();
  const characterData = () => {
    getAllCharacters()
      .then((res) => {
        let resArr = [];
        res.forEach((result) => resArr.push(result.id));

        const randElemArr = Math.floor(Math.random() * resArr.length),
              id = resArr[randElemArr];

        clearError();
        getCharacter(id)
          .then(onCharLoaded);
      });
  };


  const content = loading ?
                  <Loading/> : error ?
                              <Error/> :
                              <CharBlock char={ char }/>;

  return (
    <div className='randomchar'>
      { content }

      <div className='randomchar__static'>
        <p className='randomchar__title'>
          Random character for today!<br/>
          Do you want to get to know him better?
        </p>

        <p className='randomchar__title'>
          Or choose another one
        </p>

        <button className='button button__main' onClick={ characterData }>
          <div className='inner'>try it</div>
        </button>

        <img src={ mjolnir } alt='mjolnir' className='randomchar__decoration'/>
      </div>
    </div>
  );
}

export default RandomChar;
