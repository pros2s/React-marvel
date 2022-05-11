import { useState, useEffect } from 'react';

import Request from '../../services/services';
import CharBlock from './charBlock';
import Error from '../../helpers/error';
import Loading from '../../helpers/loading';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
  const [ char, setChar ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    characterData();

    const timer = setInterval(characterData, 10000);

    return () => { clearInterval(timer); };
  }, []) ; // eslint-disable-line


  const onCharLoaded = (char) => {
    setLoading(false);
    setChar(char);
  }

  const onError = () => {
    setLoading(false);
    setError(true);
  }

  const requestApi = new Request();
  const characterData = () => {
    requestApi
      .getAllCharacters()
      .then((res) => {
        let resArr = [];
        res.forEach((result) => resArr.push(result.id));

        const randElemArr = Math.floor(Math.random() * resArr.length),
              id = resArr[randElemArr];

        setLoading(true);
        requestApi
          .getCharacter(id)
          .then(onCharLoaded);
      })
      .catch(onError);
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
