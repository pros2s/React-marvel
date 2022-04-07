export default class Services {
  _apiLink = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=bc1bc939b59f4d12e5d6c2fcf66f7563';

  requestData = async (url) => {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Could not fetch ${url}; status: ${res.status}`);

    return await res.json();
  }

  getAllCharacters = () => this.requestData(`${this._apiLink}characters?${this._apiKey}`)

  getCharacter = (id) => this.requestData(`${this._apiLink}characters/${id}?${this._apiKey}`)
}