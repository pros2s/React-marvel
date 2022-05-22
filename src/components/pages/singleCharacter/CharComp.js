const CharComp = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;

  return (
      <div className="single-comic">
          <img src={ thumbnail } alt={ name } className="single-comic__char-img"/>
          <div className="single-comic__info">
            <h2 className="single-comic__name">{ name }</h2>
            <p className="single-comic__descr">{ description }</p>

            <div className="single__charactersBTNS">
              <a
                href={ homepage }
                className="button button__main"
                target='_blank'
                rel="noopener noreferrer">
                  <div className="inner">homepage</div>
              </a>

              <a
                style={{ 'marginLeft': '20px' }}
                href={ wiki }
                className="button button__secondary"
                target='_blank'
                rel="noopener noreferrer">
                  <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
      </div>
  )
}

export default CharComp;
