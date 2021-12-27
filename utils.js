const debounce = (callback, delay = 1000) => {
  let timeOutId;
  //how many times the callbacks can be called
  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      //apply tracks number of arguments
      callback.apply(null, args);
    }, delay);
  };
};
