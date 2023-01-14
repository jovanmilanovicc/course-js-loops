let btn = document.querySelector('#calculator button');

btn.addEventListener('click', () => {
    const inputNum = document.getElementById('user-number');
    const enteredNum = inputNum.value;
    let sumNum = 0

    for(i = 0;i <= enteredNum;i++){
            sumNum = sumNum + i;
    }
    const output = document.getElementById('calculated-sum');
    output.textContent = sumNum;
    output.style.display = 'block';
});

let aBtn = document.querySelector('#highlight-links button');


aBtn.addEventListener('click', () => {
    const aTag = document.querySelectorAll('#highlight-links a');
    for(const aElement of aTag){
        aElement.classList.add('highlight')
    }
});

const data = {
    firstName: 'Ime',
    lastName: 'Prezime',
    age: 19
};

const userBtn = document.querySelector('#user-data button');

userBtn.addEventListener('click', () => {
    let output = document.getElementById('output-user-data');
    output.innerHTML = '';
    for(const userData in data){
        const newData = document.createElement('li');
        newData.textContent = userData.toUpperCase() + ': ' + data[userData];
        output.appendChild(newData)

    }
});

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement = document.getElementById('user-target-number');
  const diceRollsListElement = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);