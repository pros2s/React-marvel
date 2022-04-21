export default class Services {
  _apiLink = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=bc1bc939b59f4d12e5d6c2fcf66f7563';
  _baseOffset = 210;

  requestData = async (url) => {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Could not fetch ${url}; status: ${res.status}`);

    return await res.json();
  };

  getAllCharacters = async (offset = this._baseOffset) => {
    const res = await this.requestData(`${this._apiLink}characters?offset=${offset}&${this._apiKey}`);
    return res.data.results.map(this._transformCharacters);
  };

  getCharacter = async (id) => {
    const res = await this.requestData(`${this._apiLink}characters/${id}?${this._apiKey}`);
    return this._transformCharacters(res.data.results[0]);
  };

  _transformCharacters = (charData) => {
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
}