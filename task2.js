class ApiService {
    async fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`Fetch error: ${error.message}`);
      }
    }
  
    async getData(url) {
      let retries = 3;
      while (retries > 0) {
        try {
          console.log(`Attempt ${4 - retries} to fetch data from ${url}`);
          const data = await this.fetchData(url);
          return data;
        } catch (error) {
          console.error(error.message);
          retries--;
          if (retries === 0) {
            throw new Error(`Failed to fetch data after 3 attempts from ${url}`);
          } else {
            console.log(`Retrying... Remaining attempts: ${retries}`);
          }
        }
      }
    }
}
  
const apiService = new ApiService();
const url = 'https://fake-json-api.mock.beeceptor.com/users';

apiService.getData(url)
  .then(data => {
    console.log('Data fetched successfully:', data);
})
  .catch(error => {
    console.error('Error fetching data:', error.message);
});
