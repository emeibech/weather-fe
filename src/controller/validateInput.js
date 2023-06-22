const validateInput = (string) => {
  const regex = /^[a-zA-Z\u0080-\u024F\s\-`."']+$/;
  // returns array of invalid characters or empty string if all is valid
  const invalids = string.split('').filter((char) => !regex.test(char));
  // remove duplicates and join
  const invalidChars = [...new Set(invalids)].join('');

  return {
    isValid: !(invalidChars),
    invalidChars: invalidChars || null,
  };
};

export default validateInput;
