const aModule = (function () {
  return { a: () => console.log('a') };
})();

const bModule = (function () {
  return {
    b: () => {
      aModule.a();
      console.log('b');
    },
  };
})();

const cModule = (function () {
  return {
    c: () => {
      aModule.a();
      bModule.b();
    },
  };
})();

cModule.c();
