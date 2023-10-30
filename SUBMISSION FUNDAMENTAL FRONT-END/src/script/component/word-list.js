import './word-item.js';

class WordList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set words(words) {
    this._words = words;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
   
    if (Array.isArray(this._words)) {
      this._words.forEach(word => {
        const wordItemElement = document.createElement('word-item');
        wordItemElement.word = word;
        this.shadowDOM.appendChild(wordItemElement);
      });
    } else {
      this.renderError('Your word is not in our dictionary.');
    }
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap');
      .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
      <h2 class="placeholder">${message}</h2>
    `;
  }
  
}

customElements.define('word-list', WordList);
