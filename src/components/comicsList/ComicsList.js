import { useState, useEffect, useRef } from 'react';

import useServices from '../../services/services';
import Loading from '../../helpers/loading';
import Error from '../../helpers/error';

import './comicsList.scss';

const ComicsList = (props) => {
  const [ newComicsLoading, setNewComicsLoading ] = useState(false);
  const [ comicsEnded, setComicsEnded ] = useState(false);
  const [ comicsList, setComicsList ] = useState([]);
  const [ offset, setOffset ] = useState(0);

  const { error, loading, getAllComics } = useServices();

  useEffect(() => {
    onRequest(offset, true);
  }, []); // eslint-disable-line


  const onRequest = (offset, initial) => {
    initial ? setNewComicsLoading(true) : setNewComicsLoading(false);
    getAllComics(offset)
      .then(onComicsLoaded);
  };

  const onComicsLoaded = (newComicsList) => {
    let ended = newComicsList.length < 8 ? true : false;

    setComicsList([...comicsList, ...newComicsList]);
    setOffset(offset + 8);
    setNewComicsLoading(false);
    setComicsEnded(ended);
  };


  const refItems = useRef([]);

  const onFocus = (id) => {
    const refCur = refItems.current;

    refCur.forEach((item) => item.classList.remove('comics__item_selected'));
    refCur[id].classList.add('comics__item_selected');
    refCur[id].focus();
  };

  const focusedAndSelected = (id, i) => {
    props.onComicsSelected(id);
    onFocus(i);
  };


  const prepareToRender = () => {
    const comics = comicsList.map((item, i) => {
      const { id, thumbnail, title, price, url } = item;
      
      const objectFit = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ?
                        'contain' :
                        'cover';
      return (
        <li
          className="comics__item"
          ref={(element) => refItems.current[i] = element}
          tabIndex={ 0 }
          key={ i }
          onClick={ () => {
              focusedAndSelected(id, i);
            }
          }
          onKeyPress={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                focusedAndSelected(id, i);
              };
            }
          }>
          <a href={ url } target='_blank' rel="noopener noreferrer">
            <img
              style={ { objectFit } }
              src={ thumbnail }
              alt={ title }
              className="comics__item-img"/>
            <div className="comics__item-name">{ title }</div>
            <div className="comics__item-price">{ price }</div>
          </a>
        </li>
      );
    });

    return loading && newComicsLoading ?
                            <Loading/> : error ?
                                        <Error/> :
                                        comics;
  };

  return (
    <div className="comics__list">
      <ul className="comics__grid">
        { prepareToRender() }
      </ul>

      <button
        className="button button__main button__long"
        style={ { 'display': comicsEnded ? 'none' : 'block' }}
        disabled={ newComicsLoading }
        onClick={ () => onRequest(offset) }>
          <div className="inner">load more</div>
      </button>
    </div>
  );
}

export default ComicsList;