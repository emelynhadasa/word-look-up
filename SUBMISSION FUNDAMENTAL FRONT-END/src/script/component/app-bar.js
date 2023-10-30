class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300&display=swap');
      * {
        font-family: 'Work Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        width: 100%;
        color: black;
        font-size: 20px;
      }
      .header-container {
        display: flex;
        align-items: center; 
        justify-content: center; 
      }
      h2 {
        font-family: 'Work Sans', sans-serif;
        padding: 16px;
        padding-top: 25px;
        text-align: center;
        font-weight: 600;
        letter-spacing: 1.5px;
        padding-left: 5px;
      }
      p {
        padding-bottom: 16px;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        line-height: 1;
        font-weight: 400;
        letter-spacing: 1.5px;
      }
      </style>
      
      <div class="header-container">
        <img src="https://play-lh.googleusercontent.com/_tslXR7zUXgzpiZI9t70ywHqWAxwMi8LLSfx8Ab4Mq4NUTHMjFNxVMwTM1G0Q-XNU80" alt="Grammar Icon" width="45" height="45">
        <h2>Word-Look-Up</h2>
      </div>
      <p>Simple Dictionary and Part of Speech App</p>
    `;
  }
  
}

customElements.define('app-bar', AppBar);
