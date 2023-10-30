import '../component/word-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
import './styles/style.css';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const wordListElement = document.querySelector('word-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchWord(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    wordListElement.words = results;
  };

  const fallbackResult = message => {
    wordListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
