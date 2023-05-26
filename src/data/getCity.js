import fetchData from './fetchData';

const getCity = async () => {
  try {
    const data = await fetchData('https://emeibechserver.com/ipgeo');
    // Return info about the error
    if (data === undefined) return 'An error occurred in the server';
    // Return data, which contains the status code
    if (data > 399) return data;
    // Return city if fetching succeeds
    return data.city;
  } catch (error) {
    console.error(error);
  }
};

export default getCity;
