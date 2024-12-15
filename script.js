const playFunction = () => {
  let max = document.getElementById("max").value;
  let problem = document.getElementById("problem");
  max = Number(max);
  if (max !== 0 && max !== 1 && max !== null) {
    console.log(max);
    for (let chance = 0; chance > 5; chance++) {
      let firstNum = Math.floor(Math.random() * max) + 1;
      console.log(`randum number #1 ${firstNum}`);
      problem.innerHTML = firstNum;
    }
  } else {
    console.error("'max' variable is defined as '0' or '1' or NaN.");
  }
};
let playButton = document.getElementById("playButton");
playButton.onclick = playFunction;
