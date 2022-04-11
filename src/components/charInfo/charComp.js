const CharComp = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  const objectFit = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ?
                    'contain' :
                    'cover';

  let charList = comics.map(({ resourceURI, name }, i) => {
      // eslint-disable-next-line
      if (i > 9) return;

      return(
        <li className='char__comics-item' key={i}>
          <a
            href={ resourceURI }
            target='_blank'
            rel='noopener noreferrer'>
              { name }
          </a>
        </li>
      )
    }
  )
  if (comics.length === 0) charList = 'Here should be some comicses';


  return (
    <>
      <div className='char__basics'>
        <img style={ { objectFit } } src={ thumbnail } alt={ name }/>
        <div>
          <div className='char__info-name'>{ name }</div>
          <div className='char__btns'>
            <a href={ homepage } className='button button__main' target='_blank' rel='noopener noreferrer'>
              <div className='inner'>homepage</div>
            </a>
            <a href={ wiki } className='button button__secondary' target='_blank' rel='noopener noreferrer'>
              <div className='inner'>Wiki</div>
            </a>
          </div>
        </div>
      </div>

      <div className='char__descr'>
        { description }
      </div>

      <div className='char__comics'>Comics:</div>
      <ul className='char__comics-list'>
        { charList }
      </ul>
    </>
  );
}

export default CharComp;
