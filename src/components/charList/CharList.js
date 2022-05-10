import { useState, useEffect, useRef } from 'react';

import Request from '../../services/services';
import Loading from '../../helpers/loading';
import Error from '../../helpers/error';

import './charList.scss';


const CharList = (props) => {
  const [ newCharsLoading, setNewCharsLoading ] = useState(false);
  const [ charsEnded, setCharsEnded ] = useState(false);
  const [ charlist, setCharList ] = useState([]);

  const [ loading, setLoading ] = useState(true);
  const [ offset, setOffset ] = useState(210);
  const [ error, setError ] = useState(false);

  const requestData = new Request();

  useEffect(() => {
    onRequest();
  }, []); // eslint-disable-line


  const onRequest = (offset) => {
    onCharsLoading();
    requestData.getAllCharacters(offset)
      .then(onCharsLoaded)
      .catch(onError);
  };

  const onCharsLoading = () => {
    setNewCharsLoading(true);
  };

  const onCharsLoaded = (newCharlist) => {
    let ended = newCharlist.length < 9 ? true : false;

    setCharList((charlist) => [...charlist, ...newCharlist]);
    setOffset((offset) => offset + 9);
    setNewCharsLoading(false);
    setCharsEnded(ended);
    setLoading(false);
  };


  const onError = () => {
    setLoading(false);
    setError(true);
  };


  const refItems = useRef([]);

  const onFocus = (id) => {
    const refCur = refItems.current;

    refCur.forEach((item) => item.classList.remove('char__item_selected'));
    refCur[id].classList.add('char__item_selected');
    refCur[id].focus();
  };

  const focusedAndSelected = (id, i) => {
    props.onCharSelected(id);
    onFocus(i);
  };


  const prepareToRender = () => {
    const characters = charlist.map((item, i) => {
      const objectFit = item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ?
                        'contain' :
                        'cover';
      return (
        <li
          className="char__item"
          ref={(element) => refItems.current[i] = element}
          tabIndex={0}
          key={ item.id }
          onClick={() => {
              focusedAndSelected(item.id, i);
            }
          }
          onKeyPress={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                focusedAndSelected(item.id, i);
              };
            }
          }>
            <img style={ { objectFit } } src={ item.thumbnail } alt={ item.name }/>
            <div className="char__name">{ item.name }</div>
        </li>
      );
    });

    return loading ?
          <Loading/> : error ?
                      <Error/> :
                      characters;
  };


  return (
    <div className="char__list">
      <ul className="char__grid">
        { prepareToRender() }
      </ul>

      <button
        className="button button__main button__long"
        style={ { 'display': charsEnded ? 'none' : 'block' }}
        disabled={ newCharsLoading }
        onClick={ () => onRequest(offset) }>
          <div className="inner">load more</div>
      </button>
    </div>
  );
}

export default CharList;
