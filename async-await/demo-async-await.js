const hello = async () => {
  return await Promise.resolve("Hello");
};

hello().then((value) => {
  console.log(value);
});
