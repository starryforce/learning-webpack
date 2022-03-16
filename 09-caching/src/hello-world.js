function getString() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("hello world!!!!！！！！！");
    }, 2000);
  });
}

async function helloWorld() {
  let string = await getString();
  console.log(string);
}

export default helloWorld;
