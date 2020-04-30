// console.log("hello");

const divScreen = document.querySelector("#screen");

const btnCreateNum = document.querySelector("#createNumber");
const btnCallNum = document.querySelector("#callNumber");

const spanNewNum = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");

let n = 0;
let queue = [];

btnCreateNum.onclick = () => {
  n += 1;
  queue.push(n);
  spanNewNum.innerText = n;
  spanQueue.innerText = JSON.stringify(queue); // queue.toString()
};

btnCallNum.onclick = () => {
  if (queue.length === 0) {
    return;
  }
  const m = queue.shift();
  divScreen.innerText = `请${m}号就餐`;
  spanQueue.innerText = JSON.stringify(queue);
};
