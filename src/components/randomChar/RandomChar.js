import { Component } from 'react';

import Request from '../../services/services';
import CharBlock from './charBlock';
import Error from '../../helpers/error';
import Loading from '../../helpers/loading';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false
  };
  componentDidMount() { this.characterData() };


  onCharLoaded = (char) => this.setState({ char, loading: false });

  onError = () => this.setState({ loading: false, error: true });

  requestApi = new Request();
  characterData = () => {
    this.requestApi
      .getAllCharacters()
      .then((res) => {
        let resArr = [];
        res.forEach((result) => resArr.push(result.id));

        const randElemArr = Math.floor(Math.random() * resArr.length),
              id = resArr[randElemArr];

        this.setState({ loading: true });
        this.requestApi
          .getCharacter(id)
          .then(this.onCharLoaded);
      })
      .catch(this.onError);
  };


  render() {
    const { char, loading, error } = this.state;

    const content = loading ?
                    <Loading/> : error ?
                                <Error/> :
                                <CharBlock char={ char }/>;

    return (
      <div className='randomchar'>
        { content }

        <div className='randomchar__static'>
          <p className='randomchar__title'>
            Random character for today!<br/>
            Do you want to get to know him better?
          </p>

          <p className='randomchar__title'>
            Or choose another one
          </p>

          <button className='button button__main' onClick={ this.characterData }>
            <div className='inner'>try it</div>
          </button>

          <img src={ mjolnir } alt='mjolnir' className='randomchar__decoration'/>
        </div>
      </div>
    );
  };
}

export default RandomChar;
