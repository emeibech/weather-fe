const handleErrorMsg = (statusCode, statusText) => {
  if (statusCode === 429) {
    return `${statusCode}: Rate limit exceeded. Try again in an hour.`;
  }

  return `${statusCode}: ${statusText}`;
};

const fetchData = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      return { error: handleErrorMsg(res.status, res.statusText) };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return { error: 'Network Error: Server might be down.' };
  }
};

export default fetchData;
