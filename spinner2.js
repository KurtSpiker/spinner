let spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-  ', '\r\\  ', '\r|  ']

const spinnerInterval = (someArray) => {
  let timer = 0;

  for (const item of someArray) {
    setTimeout(() => {
      process.stdout.write(item);
    }, timer);
    timer += 200;
  }
  console.log("   ");
}
spinnerInterval(spinnerArray);