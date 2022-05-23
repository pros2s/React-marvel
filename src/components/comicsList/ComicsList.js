import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
    initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
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

  const onClick = (id) => refItems.current[id].click();


  const prepareToRender = () => {
    const comics = comicsList.map((item, i) => {
      const { id, thumbnail, title, price } = item;

      const objectFit = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ?
                        'contain' :
                        'cover';
      return (
        <Link to={`/comics/${id}`} key={ i }>
          <li
            className='comics__item'
            tabIndex={ 0 }
            ref={(element) => refItems.current[i] = element}
            onKeyPress={(e) => { if (e.key === ' ' || e.key === 'Enter') onClick(i); } }>
              <img
                style={ { objectFit } }
                src={ thumbnail }
                alt={ title }
                className='comics__item-img'/>
              <div className='comics__item-name'>{ title }</div>
              <div className='comics__item-price'>{ price }</div>
          </li>
        </Link>
      );
    });

    return loading && !newComicsLoading ?
                              <Loading/> : error ?
                                           <Error/> : comics;
  };

  return (
    <div className='comics__list'>
      <ul className='comics__grid'>
        { prepareToRender() }
      </ul>

      <button
        className='button button__main button__long'
        style={ { 'display': comicsEnded ? 'none' : 'block' }}
        disabled={ newComicsLoading }
        onClick={ () => onRequest(offset) }>
          <div className='inner'>load more</div>
      </button>
    </div>
  );
}

export default ComicsList;
