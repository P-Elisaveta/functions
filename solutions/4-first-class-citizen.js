const run = (text) => {
    // BEGIN
    function takeLast(string, n) {
      let size = string.length;
      if (size == 0 || n > size) return null;
      return string.slice(size - n).split('').reverse().join('');
    }
    // END
    return takeLast(text, 4);
  };
export default run;