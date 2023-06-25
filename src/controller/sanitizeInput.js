const sanitizeInput = (string) => {
  const regex = /^[a-zA-Z\u0080-\u024F\s\-`."']+$/;
  const sanitized = string
    .split('')
    .filter((char) => regex.test(char))
    .join('');

  return sanitized;
};

export default sanitizeInput;
