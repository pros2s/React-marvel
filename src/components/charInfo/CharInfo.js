import { Component } from 'react';

import Request from '../../services/services';
import CharComp from './charComp';
import Error from '../../helpers/error';
import Loading from '../../helpers/loading';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false
  };
  componentDidMount() { this.characterData() }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) this.characterData();
  }


  onCharLoaded = (char) => this.setState({ char, loading: false});
  onError = () => this.setState({ loading: false, error: true});


  requestApi = new Request();

  characterData = () => {
    if (!this.props.charId) return;

    this.setState({ loading: true });
    this.requestApi
      .getCharacter(this.props.charId)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };


  render() {
    const { char, loading, error } = this.state;

    const content = loading ?
                    <Loading/> : error ?
                                <Error/> : char ?
                                          <CharComp char={ char }/> : <Skeleton/>;

    return (
      <div className='char__info'>
        { content }
      </div>
    );
  };
}

export default CharInfo;
