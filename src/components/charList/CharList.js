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
    newCharsLoading: false,
    offset: 210,
    charsEnded: false
  };

  requestData = new Request();

  componentDidMount() {
    this.onRequest();
  };


  onRequest = (offset) => {
    this.onCharsLoading();
    this.requestData.getAllCharacters(offset)
      .then(this.onCharsLoaded)
      .catch(this.onError);
  }

  onCharsLoading = () => {
    this.setState({ newCharsLoading: true})
  };

  onCharsLoaded = (newCharlist) => {
    let ended = newCharlist.length < 9 ? true : false;

    this.setState(({ offset, charlist }) => ({
      charlist: [...charlist, ...newCharlist],
      loading: false,
      newCharsLoading: false,
      offset: offset + 9,
      charsEnded: ended
    }));
  };


  onError = () => {
    this.setState(({ loading: false, error: true }));
  };


  refItems = [];

  setRef = (ref) => {
    this.refItems.push(ref);
  };

  onFocus = (id) => {
    this.refItems.forEach((item) => item.classList.remove('char__item_selected'));
    this.refItems[id].classList.add('char__item_selected');
    this.refItems[id].focus();
  };

  focusedAndSelected = (id, i) => {
    this.props.onCharSelected(id);
    this.onFocus(i);
  };


  prepareToRender = () => {
    const { charlist, loading, error } = this.state;

    const characters = charlist.map((item, i) => {
      const objectFit = item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ?
                        'contain' :
                        'cover';
      return (
        <li
          className="char__item"
          ref={this.setRef}
          tabIndex={0}
          key={ item.id }
          onClick={() => {
              this.focusedAndSelected(item.id, i);
            }
          }
          onKeyPress={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                this.focusedAndSelected(item.id, i);
              };
            }
          }>
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
    const { newCharsLoading, offset, charsEnded } = this.state;

    return (
      <div className="char__list">
        <ul className="char__grid">
          { this.prepareToRender() }
        </ul>

        <button
          className="button button__main button__long"
          style={ { 'display': charsEnded ? 'none' : 'block' }}
          disabled={ newCharsLoading }
          onClick={ () => this.onRequest(offset) }>
            <div className="inner">load more</div>
        </button>
      </div>
    );
  };
}

export default CharList;
