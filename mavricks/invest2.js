function calculateInvestment() {
    var initialAmount = parseFloat(document.getElementById('initialAmount').value);
    var monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var investmentPeriod = parseFloat(document.getElementById('investmentPeriod').value);
  
    var totalMonths = investmentPeriod * 12;
    var monthlyInterestRate = interestRate / 100 / 12;
    var futureValue = initialAmount;
  
    for (var i = 0; i < totalMonths; i++) {
      futureValue += monthlyContribution;
      futureValue *= (1 + monthlyInterestRate);
    }
  
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'After ' + investmentPeriod + ' years, your investment will be worth ₹' + futureValue.toFixed(2);
  }