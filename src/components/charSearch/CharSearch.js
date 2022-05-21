import './charSearch.scss';


const CharSearch = () => {
  return (
    <div className='char__search-form'>
      <label htmlFor="search" className="char__search-label">Or find a character by name:</label>
      <div className="char__search-wrapper">
        <input
          type="text"
          name='search'
          placeholder="Enter name"/>
        <button
          className='button button__main'
          type='submit'>
            <div className="inner">find</div>
        </button>
      </div>
    </div>
  )
};

export default CharSearch;
