function fetchFromAPI() {
    return fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
        throw error;
      });
  }
  
  function processData(data) {
    return data;
  }
  
  function saveData(processedData) {
    console.log('Processed data:', processedData);
    return 'Data saved successfully';
  }
  
  function performOperations() {
    fetchFromAPI()
      .then(processData)
      .then(saveData)
      .then(successMessage => {
        console.log(successMessage);
      })
      .catch(error => {
        console.error('Error performing operations:', error.message);
      });
  }
performOperations();
  