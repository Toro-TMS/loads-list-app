const ERROR_RATE = 0;

function delay(ms, { errorRate } = {}) {
  const shouldError = Math.random() < errorRate || ERROR_RATE;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldError) {
        reject(new Error("Error"));
      } else {
        resolve();
      }
    }, ms)
  })
}

export default delay;
