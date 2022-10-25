const _initTime = Date.now();
const newDivContainer = document.querySelector(".displayedsquare-wrapper");
const ul = document.querySelector("ul");

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  const color = e.target.classList[1];
  const time = getElapsedTime();
  const newDiv = createDiv(color);
  newDivContainer.append(newDiv);
  const newElement = createLi(`[${time}] Created a new ${color} square`);
  ul.append(newElement);
  alert(`${color}`);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}
const createDiv = (colorName) => {
  const div = document.createElement("div");
  div.className = `displayedsquare ${colorName}`;
  return div;
};
const createLi = (text) => {
  const li = document.createElement("li");
  li.innerText = text;
  return li;
};
document.body.addEventListener('keypress', function(event){
  console.log(event.code)
  if(event.code === 'Space'){
    random_bg_color();
    const BgTime = getElapsedTime();
    const newElement = createLi(`[${BgTime}] change background color`);
    ul.append(newElement);
  }
})
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);
  document.body.style.background = bgColor;
  }
document.querySelector('body').addEventListener('keydown', function(event){
  if (event.keyCode === 32) {
    document.body.style.background = 'violet'
  }
  const li = document.querySelector ('ul')
    if (event.keyCode === 76){
    ul.remove()
 }
 const rem_squares = document.querySelector('.displayedsquare-wrapper')
if (event.keyCode === 83) {
  rem_squares.remove() 
}
} )
const squareAlert = document.querySelector(".displayedsquare-wrapper").clickOnSquare = (e) => {
  alert('squareAlert');
}
