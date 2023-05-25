import fetchData from './fetchData';

const getCoordinates = async () => {
  try {
    const data = await fetchData('https://emeibechserver.com/ipgeo');
    return {
      lat: data.latitude,
      lon: data.longitude,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCoordinates;
