import { Link } from 'react-router-dom';

const SearchResult = ({ char }) => {
  const content = char.length > 0 ?
          (
            <div className='char__search-wrapper'>
              <div className='char__search-success'>There is! Do you want to visit { char[0].name } page?</div>
              <Link to={ `/characters/${char[0].id}` } className='button button__secondary'>
                  <div className='inner'>To page</div>
              </Link>
            </div>
          ) :
          (
            <div className='char__search-error'>
              The character was not found. Check the name and try again
            </div>
          )

  return (
    <>
      { content }
    </>
  )
}

export default SearchResult;
