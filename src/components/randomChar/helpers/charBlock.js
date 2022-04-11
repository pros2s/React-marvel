const CharBlock = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;

  const noDescMessage = 'Here should be description of personage';
  const objectFit = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ?
                    'contain' :
                    'cover';

  return (
    <div className="randomchar__block">
      <img src={ thumbnail } style={{ objectFit }} alt="Random character" className="randomchar__img"/>

      <div className="randomchar__info">
        <p className="randomchar__name">{ name }</p>
        <p className="randomchar__descr">{ description || noDescMessage }</p>

        <div className="randomchar__btns">
          <a href={ homepage } className="button button__main">
            <div className="inner">homepage</div>
          </a>

          <a href={ wiki } className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CharBlock;
