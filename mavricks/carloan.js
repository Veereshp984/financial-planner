function calculateLoan() {
    var carPrice = parseFloat(document.getElementById('carPrice').value);
    var downPayment = parseFloat(document.getElementById('downPayment').value);
    var loanTerm = parseFloat(document.getElementById('loanTerm').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
  
    var loanAmount = carPrice - downPayment;
    var monthlyInterestRate = interestRate / 100 / 12;
    var totalPayments = loanTerm * 12;
  
    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
  
    var totalAmountPaid = monthlyPayment * totalPayments;
    var totalInterestPaid = totalAmountPaid - loanAmount;
  
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
      <p>Total Payments: $${totalAmountPaid.toFixed(2)}</p>
      <p>Total Interest Paid: $${totalInterestPaid.toFixed(2)}</p>
    `;
  }