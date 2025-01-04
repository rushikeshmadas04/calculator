let calculationString = localStorage.getItem('calculationString') || '';
  updateDisplay(calculationString);

 
  function handleInput(value) {
    calculationString += value; 
    localStorage.setItem('calculationString', calculationString); 
    updateDisplay(calculationString); 
  }
  function calculateResult() {
    try {
      const result = eval(calculationString); 
      updateDisplay(result); 
      calculationString = result.toString(); 
      localStorage.setItem('calculationString', calculationString); 
    } catch (error) {
      updateDisplay('Error'); 
      calculationString = ''; 
      localStorage.removeItem('calculationString'); 
    }
  }

 
  function clearCalculation() {
    calculationString = '';  
    updateDisplay(''); 
    localStorage.removeItem('calculationString'); 
    document.getElementById('result').style.display = 'none';
  }


  function updateDisplay(value) {
    const resultElement = document.getElementById('result');
    resultElement.innerText = value; 
    if (value === '') {
      resultElement.style.display = 'none'; 
    } else {
      resultElement.style.display = 'block'; 
    } 
  }