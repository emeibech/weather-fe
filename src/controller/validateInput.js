const validateInput = (param) => {
  const regex = /^[a-zA-Z\u0080-\u024F\s\-`."']+$/;
  // Put characters in array
  const newString = param.split('')
  // Filter special characters and symbols using regex pattern
    .filter((char) => regex.test(char))
  // Turn the array back to string
    .join('');
  return newString.length === param.length;
};

export default validateInput;
