class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap');
        
        .search-container {
          max-width: 800px;
          padding: 16px;
          display: flex;
          position: sticky;
          top: 10px;
        }

        .search-container > input {
          border:none;
          width: 70%;
          padding: 16px;z
          font-weight: bold;
          font-family: 'Work Sans', sans-serif;
          font-size: 18px;
          letter-spacing: 1.2px;
          border-radius: 100px;
          margin-right: 10px;
        }

        .search-container > input:focus::placeholder {
          border-width:0px;
          border:none;
          font-weight: bold;
        }
        
        .search-container >  input::placeholder {
          border: none;
          color: #54545d;
          font-weight: normal;
        }
        
        .search-container > button {
          background-color: #c2fbd7;
          border-radius: 100px;
          box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
          color: green;
          cursor: pointer;
          display: inline-block;
          font-family: 'Work Sans', sans-serif;
          padding: 7px 20px;
          text-align: center;
          text-decoration: none;
          transition: all 250ms;
          border: 0;
          font-size: 16px;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }
        
        .search-container > button:hover {
          box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
          transform: scale(1.05) rotate(-1deg);
        }

        @media screen and (max-width: 550px){
          .search-container {
            border: none;
            flex-direction: column;
            position: static;
          }
        
          .search-container > input {
            border: none;
            width: 100%;
            margin-bottom: 12px;
          }
        
          .search-container > button {
            width: 100%;
          }
        }
      </style>
  
      
      <div id="search-container" class="search-container">
        <input placeholder="Start typing any word or phrases" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);