import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ComicComp = ({ data }) => {
  if (!data) return 'Here should be some comicses';
  const { pageCount, title, description, thumbnail, language, price, url } = data

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content={ `${title} information` }
        />
        <title>{ `${title}` }</title>
      </Helmet>

      <img src={ thumbnail } alt={ title } className='single-comic__img'/>

      <div className='single-comic__info'>
        <h2 className='single-comic__name'>{ title }</h2>

        <p className='single-comic__descr'>{ description }</p>

        <p className='single-comic__descr'>{ pageCount }</p>
        <p className='single-comic__descr'>Language: { language }</p>
        <div className='single-comic__price'>{ price }</div>

        <p
          className='single-comic__descLink'>
            Official page on <a
                              className='single-comic__link'
                              href={ url }
                              target='_blank'
                              rel='noopener noreferrer'
                              style={ { 'color': '#E82124' } }>
                                Marvel
                              </a>
        </p>
      </div>

      <Link to='/comics' className='single-comic__back'>Back to all</Link>
    </>
  );
};

export default ComicComp;
