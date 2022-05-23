import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useServices from '../../../services/services';
import Error from '../../../helpers/error';
import Loading from '../../../helpers/loading';
import ComicComp from './ComicComp';

import './singleComicPage.scss';

const SingleComicPage = () => {
  const [ comic, setComic ] = useState(null);
  const { comicId } = useParams();

  const { error, loading, clearError, getComics  } = useServices();

  useEffect(() => { updateComic() }, [ comicId ]); // eslint-disable-line

  const updateComic = () => {
    clearError();
    getComics(comicId)
      .then(onComicLoaded)
  };

  const onComicLoaded = (comic) => { setComic(comic) };


  const content = loading ?
                  <Loading/> : error ?
                               <Error/> : <ComicComp comic={ comic }/>;


  return (
    <div className='single-comic'>
      { content }
    </div>
  );
};

export default SingleComicPage;
