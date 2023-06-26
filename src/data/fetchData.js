const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    // Return status if response is not ok
    if (!res.ok) return { error: `${res.status} ${res.statusText}` };
    // Parse response data
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return { error: 'Network Error: Server might be down.' };
  }
};

export default fetchData;
