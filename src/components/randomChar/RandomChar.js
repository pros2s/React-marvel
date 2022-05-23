import { useState, useEffect } from 'react';

import useServices from '../../services/services';
import CharBlock from './charBlock';
import setContent from '../../utils/setContent';

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


  const { total, getEveryOne, getCharacter, clearError, process, setProcess } = useServices();
  const characterData = () => {
    let randomTotal;
    total().then((result) => {
      randomTotal = Math.floor(Math.random() * ((result + 1) - 100) + 100);

      getEveryOne(randomTotal)
        .then((res) => {
          let resArr = [];
          res.forEach((result) => resArr.push(result.id));

          const randElemArr = Math.floor(Math.random() * resArr.length),
                id = resArr[randElemArr];

          clearError();
          getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
        });
    });
  };


  return (
    <div className='randomchar'>
      { setContent(CharBlock, process, char) }

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
