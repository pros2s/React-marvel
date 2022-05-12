import { useHttp } from '../hooks/hook.http';

const useServices = () => {
  const { loading, error, request, clearError } = useHttp();

  const _apiLink = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=bc1bc939b59f4d12e5d6c2fcf66f7563';
  const _baseOffset = 210;


  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(`${_apiLink}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacters);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiLink}characters/${id}?${_apiKey}`);
    return _transformCharacters(res.data.results[0]);
  };

  const getAllComics = async (offset = 0) => {
    const res = await request(`${_apiLink}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformComics);
  };

  const getComics = async (id) => {
    const res = await request(`${_apiLink}comics/${id}?${_apiKey}`);
    return _transformCharacters(res.data.results[0]);
  };


  const _transformCharacters = (charData) => {
    return {
      id: charData.id,
      name: charData.name,
      description: charData.description,
      thumbnail: charData.thumbnail.path + '.' + charData.thumbnail.extension,
      homepage: charData.urls[0].url,
      wiki: charData.urls[1].url,
      comics: charData.comics.items
    };
  };

  const _transformComics = (comicsData) => {
    return {
      id: comicsData.id,
      title: comicsData.title,
      description: comicsData.description || 'There is no description',
      thumbnail: comicsData.thumbnail.path + '.' + comicsData.thumbnail.extension,
      language: comicsData.textObjects.language || 'en-us',
      price: comicsData.prices.price ? `${comicsData.prices.price}$` : 'not available',
      url: comicsData.urls[0].url
    }
  }

  return { error, loading, getAllCharacters, getCharacter, clearError, getAllComics, getComics };
}

export default useServices;