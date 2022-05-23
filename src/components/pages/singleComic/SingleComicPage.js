import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import setContent from '../../../utils/setContent';
import useServices from '../../../services/services';
import ComicComp from './ComicComp';

import './singleComicPage.scss';

const SingleComicPage = () => {
  const [ comic, setComic ] = useState(null);
  const { comicId } = useParams();

  const { clearError, getComics, process, setProcess } = useServices();

  useEffect(() => { updateComic() }, [ comicId ]); // eslint-disable-line

  const updateComic = () => {
    clearError();
    getComics(comicId)
      .then(onComicLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onComicLoaded = (comic) => { setComic(comic) };


  return (
    <div className='single-comic'>
      { setContent(ComicComp, process, comic) }
    </div>
  );
};

export default SingleComicPage;
