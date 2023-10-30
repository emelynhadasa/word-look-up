class WordItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set word(word) {
    this._word = word;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap');
        * {
          margin: 0;
          padding-left: 15px;
          padding-right: 15px;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
        .word-info > h2 {
          font-weight: lighter;
        }
        .word-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10;
        }
        .audio-container {
          display: flex;
          align-items: center;
        }
        .audio-button {
          font-size: 24px;
          cursor: pointer;
          background: none;
          border: none;
          margin-right: 10px;
        }
      </style>
  
      <br>
      <h1>${this._word.word}</h1>
      ${this.renderPhonetics()}
      ${this.renderAudio()}
      <br><hr><br>
      ${this.renderPartsOfSpeech()}
  
      <script>
        <play-button></play-button>
      </script>
    `;
  }
  

  renderPhonetics() {
    if (this._word.phonetics && this._word.phonetics.length > 0) {
      return `<p>${this._word.phonetics[this._word.phonetics.length - 1].text}</p>`;
    }
    return '';
  }

  renderAudio() {
    if (this._word.phonetics && this._word.phonetics.length > 0 && this._word.phonetics[0].audio) {
      return `
        <div class="audio-container">
          <button id="play-button" class="audio-button">🔊</button>
          <audio id="audio-player" controls>
            <source src="${this._word.phonetics[0].audio}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      `;
    }
    return '';
  }

  renderPartsOfSpeech() {
    if (!this._word.meanings || this._word.meanings.length === 0) {
      return '<p>No definitions found for this word.</p>';
    }

    const partsOfSpeechHTML = this._word.meanings
      .map((meaning, index) => `
        <h2>As ${meaning.partOfSpeech}</h2>
        <p>Definition: ${meaning.definitions[0] ? meaning.definitions[0].definition : 'No definition available.'}</p>
        <br>
      `)
      .join('');

    return partsOfSpeechHTML;
  }
  
}

customElements.define('word-item', WordItem);
