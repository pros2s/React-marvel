import { Component } from 'react';

import Request from '../../services/services';
import Error from '../helpers/error';
import Loading from '../helpers/loading';

import './charList.scss';


class CharList extends Component {
  state = {
    charlist: [],
    loading: true,
    error: false,
    newCharsLoading: false
  };

  requestData = new Request();

  componentDidMount() {
    this.onCharsLoading();
    this.requestData.getAllCharacters()
      .then(this.onCharsLoaded)
      .catch(this.onError);
  };


  onCharsLoading = () => {
    this.setState({ newCharsLoading: true})
  };

  onCharsLoaded = (charlist) => {
    this.setState(({
      charlist,
      loading: false,
      newCharsLoading: false
    }));
  };


  onError = () => {
    this.setState(({ loading: false, error: true }));
  };


  prepareToRender = () => {
    const { charlist, loading, error } = this.state;

    const characters = charlist.map((item) => {
      const objectFit = item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ?
                        'contain' :
                        'cover';
      return (
        <li className="char__item"
            key={ item.id }
            onClick={() => this.props.onCharSelected(item.id)}>
          <img style={ { objectFit } } src={ item.thumbnail } alt={ item.name }/>
          <div className="char__name">{ item.name }</div>
        </li>
      );
    });

    return loading ?
          <Loading/> : error ?
                      <Error/> :
                      characters;
  };

  render() {
    return (
      <div className="char__list">
        <ul className="char__grid">
          { this.prepareToRender() }
        </ul>

        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  };
}

export default CharList;
