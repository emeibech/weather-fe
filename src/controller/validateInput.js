const validateInput = (string) => {
  const regex = /^[a-zA-Z\u0080-\u024F\s\-`."']+$/;
  const invalids = string.split('').filter((char) => !regex.test(char));
  const invalidChars = [...new Set(invalids)].join('');

  return {
    isValid: !(invalidChars),
    invalidChars: invalidChars || null,
  };
};

export default validateInput;
