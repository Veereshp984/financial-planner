function calculateSavings() {
    // Get user input values
    var initialAmount = parseFloat(document.getElementById('initialAmount').value);
    var monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var years = parseFloat(document.getElementById('years').value);
  
    // Calculate future value of savings
    var totalMonths = years * 12;
    var monthlyInterestRate = interestRate / 100 / 12;
    var futureValue = initialAmount;
  
    for (var i = 0; i < totalMonths; i++) {
      futureValue += monthlyContribution;
      futureValue *= (1 + monthlyInterestRate);
    }
  
    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'After ' + years + ' years, your savings will be ₹' + futureValue.toFixed(2);
  }