class DataSource {
  static searchWord(keyword) {
    const notificationElement = document.getElementById('notification');

    if (keyword.length === 0) {
      notificationElement.textContent = "Please type any words.";
      notificationElement.style.display = 'block';

      setTimeout(() => {
        notificationElement.style.display = 'none';
      }, 3000);

      return Promise.reject("No keyword provided");
    }

    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
