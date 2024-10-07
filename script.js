const submitBtn = document.querySelector('#convert-btn');
const outputBox = document.querySelector('#output');
const romanNumerals = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = document.querySelector('#number').value;
  if (userInput === '') {
    outputBox.classList.remove('hidden');
    outputBox.innerHTML = 'Please enter a valid number';
  } else if (userInput < 1) {
    outputBox.classList.remove('hidden');
    outputBox.innerHTML = 'Please enter a number greater than 0';
  } else if (userInput > 3999) {
    outputBox.classList.remove('hidden');
    outputBox.innerHTML = 'Please enter a number less than 4000';
  } else {
    outputBox.classList.remove('hidden');
    let reversedInput = userInput.split('').reverse().map(Number);
    console.log(reversedInput);
    outputBox.innerHTML = conversion(reversedInput);
  }
});

const conversion = (userInput) => {
  let result = '';
  for (let index = 0; index < userInput.length; index++) {
    const digitPlace = 10 ** index;
    console.log(digitPlace);
    const element = userInput[index] * digitPlace;
    if (element > 0 && element < (4 * digitPlace)) {
      for(let i = 0; i < userInput[index]; i++){
        result += romanNumerals[1 * digitPlace];
      }
    } else if (element === (4 * digitPlace)) {
      result += romanNumerals[4 * digitPlace];
    } else if (element === (5 * digitPlace)) {
      result += romanNumerals[5 * digitPlace];
    } else if (element > (5 * digitPlace) && element < (9 * digitPlace)) {
      for(let i = 0; i < (userInput[index] - 5); i++){
        result += romanNumerals[1 * digitPlace];
      }
      result += romanNumerals[5 * digitPlace];
    } else if (element === (9 * digitPlace)) {
      result += romanNumerals[9 * digitPlace];
    } else if (element === (10 * digitPlace)){
      result += romanNumerals[1 * digitPlace];
    }
  }
  return result.split('').reverse().join('');
}